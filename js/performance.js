/**
 * VIA FIRENZE — Performance & Animation Observer
 * Usa l'Intersection Observer API per animare gli elementi
 * solo quando entrano nel viewport. Zero dipendenze esterne.
 */

(function () {
  'use strict';

  // ── 1. Animazioni di entrata con Intersection Observer ──────
  // Gli elementi con classe .vf-animate partono invisibili
  // e appaiono con fade+slide quando entrano nel viewport.

  const ANIMATE_CLASS   = 'vf-animate';
  const VISIBLE_CLASS   = 'vf-visible';
  const THRESHOLD       = 0.12;   // visibile al 12% → parte l'animazione
  const ROOT_MARGIN     = '0px 0px -40px 0px'; // anticipa di 40px dal basso

  function initAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: mostra tutto subito su browser vecchi
      document.querySelectorAll('.' + ANIMATE_CLASS).forEach(el => {
        el.classList.add(VISIBLE_CLASS);
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          // Smette di osservare una volta animato (performance)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold:  THRESHOLD,
      rootMargin: ROOT_MARGIN
    });

    document.querySelectorAll('.' + ANIMATE_CLASS).forEach(el => {
      observer.observe(el);
    });
  }

  // ── 2. Inietta gli stili CSS delle animazioni ────────────────
  function injectAnimationStyles() {
    if (document.getElementById('vf-perf-styles')) return;

    const style = document.createElement('style');
    style.id = 'vf-perf-styles';
    style.textContent = `
      /* Stato iniziale: nascosto e abbassato */
      .vf-animate {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Stato visibile: piena opacità, posizione normale */
      .vf-animate.vf-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* Ritardi in cascata per elementi in griglia */
      .vf-animate[data-delay="1"] { transition-delay: 0.10s; }
      .vf-animate[data-delay="2"] { transition-delay: 0.20s; }
      .vf-animate[data-delay="3"] { transition-delay: 0.30s; }
      .vf-animate[data-delay="4"] { transition-delay: 0.40s; }

      /* Variante: solo fade (senza slide) */
      .vf-animate.vf-fade-only {
        transform: none;
      }
      .vf-animate.vf-fade-only.vf-visible {
        transform: none;
      }
    `;
    document.head.appendChild(style);
  }

  // ── 3. Applica .vf-animate agli elementi della pagina ────────
  // Aggiunge la classe agli elementi "animabili" in modo
  // non invasivo, senza modificare l'HTML di ogni pagina.
  function tagElements() {
    const selectors = [
      // Section headers
      '.section-header',
      // Feature items (strip vantaggi)
      '.feature-item',
      // Product cards
      '.product-card',
      // Collection cards
      '.collection-card',
      // Contact details
      '.contact-detail',
      // Form card
      '.form-card',
      // Footer columns
      '.footer-col',
      // Legal page sections
      '.legal-body h2'
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, index) => {
        // Salta se già ha la classe
        if (el.classList.contains(ANIMATE_CLASS)) return;
        // Salta elementi within the hero (above the fold)
        if (el.closest('.hero')) return;

        el.classList.add(ANIMATE_CLASS);

        // Aggiungi ritardo in cascata per elementi in griglia (max 4)
        const delay = (index % 4) + 1;
        el.setAttribute('data-delay', delay);
      });
    });
  }

  // ── 4. Lazy loading immagini con Observer (fallback) ─────────
  // Per browser che non supportano loading="lazy" nativo.
  function initLazyImages() {
    // I browser moderni gestiscono loading="lazy" nativamente.
    // Questo observer gestisce il fallback per quelli vecchi.
    if ('loading' in HTMLImageElement.prototype) return; // nativo supportato

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (!lazyImages.length) return;

    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' }); // carica 200px prima che siano visibili

    lazyImages.forEach(img => imgObserver.observe(img));
  }

  // ── 5. Ottimizza scroll performance ──────────────────────────
  // Segna il body quando l'utente sta scrollando per
  // permettere al CSS di disabilitare hover su mobile.
  let scrollTimer = null;
  function initScrollOptimization() {
    window.addEventListener('scroll', () => {
      document.body.classList.add('is-scrolling');
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 150);
    }, { passive: true }); // passive:true = non blocca il thread UI
  }

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    injectAnimationStyles();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        tagElements();
        initAnimations();
        initLazyImages();
      });
    } else {
      tagElements();
      initAnimations();
      initLazyImages();
    }

    initScrollOptimization();
  }

  init();
})();
