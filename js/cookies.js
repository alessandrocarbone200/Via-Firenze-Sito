/**
 * VIA FIRENZE — Cookie Consent Manager
 * GDPR-compliant: nessun cookie o script di tracking viene caricato
 * prima del consenso esplicito dell'utente.
 */

(function () {
  const CONSENT_KEY = 'vf_cookie_consent';
  const CONSENT_DATE_KEY = 'vf_cookie_consent_date';

  // ── Legge il consenso salvato ─────────────────────────────
  function getConsent() {
    return localStorage.getItem(CONSENT_KEY); // 'accepted' | 'rejected' | null
  }

  // ── Salva il consenso con data ────────────────────────────
  function saveConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
  }

  // ── Nasconde il banner con animazione ─────────────────────
  function hideBanner() {
    const banner = document.getElementById('vf-cookie-banner');
    if (!banner) return;
    banner.style.transform = 'translateY(120%)';
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 400);
  }

  // ── Abilita analytics (decommenta quando hai GA/GTM) ──────
  function enableAnalytics() {
    // TODO: decommenta e sostituisci con il tuo ID quando hai Google Analytics
    //
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){ dataLayer.push(arguments); }
    // gtag('js', new Date());
    // gtag('config', 'G-XXXXXXXXXX');
    //
    // const script = document.createElement('script');
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    // script.async = true;
    // document.head.appendChild(script);
    console.log('[VF] Analytics abilitati (placeholder)');
  }

  // ── Gestisce il click su "Accetta tutti" ──────────────────
  function handleAccept() {
    saveConsent('accepted');
    hideBanner();
    enableAnalytics();
  }

  // ── Gestisce il click su "Rifiuta" ────────────────────────
  function handleReject() {
    saveConsent('rejected');
    hideBanner();
    // Nessuno script di tracking viene caricato
    console.log('[VF] Cookie non-essenziali rifiutati.');
  }

  // ── Crea e inietta il banner nel DOM ─────────────────────
  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'vf-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.setAttribute('aria-live', 'polite');

    banner.innerHTML = `
      <div class="vf-cookie-inner">
        <div class="vf-cookie-text">
          <p>
            Utilizziamo i cookie per migliorare la tua esperienza di navigazione.
            Leggi la nostra <a href="/cookie-policy.html">Cookie Policy</a> per saperne di più.
          </p>
        </div>
        <div class="vf-cookie-actions">
          <button id="vf-cookie-reject" class="vf-btn-reject">Rifiuta</button>
          <button id="vf-cookie-accept" class="vf-btn-accept">Accetta tutti</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Mostra con animazione dopo 600ms (non disturba il caricamento)
    setTimeout(() => {
      banner.style.transform = 'translateY(0)';
      banner.style.opacity = '1';
    }, 600);

    document.getElementById('vf-cookie-accept').addEventListener('click', handleAccept);
    document.getElementById('vf-cookie-reject').addEventListener('click', handleReject);
  }

  // ── Inietta gli stili CSS del banner ─────────────────────
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #vf-cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background: #1C1C1A;
        border-top: 1px solid #3A3A36;
        padding: 20px 0;
        transform: translateY(120%);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
        font-family: 'Lato', system-ui, sans-serif;
      }

      .vf-cookie-inner {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        flex-wrap: wrap;
      }

      .vf-cookie-text {
        flex: 1;
        min-width: 260px;
      }

      .vf-cookie-text p {
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #C8C0B0;
        font-weight: 400;
      }

      .vf-cookie-text a {
        color: #C8A870;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: color 0.2s;
      }

      .vf-cookie-text a:hover {
        color: #E0C090;
      }

      .vf-cookie-actions {
        display: flex;
        gap: 12px;
        flex-shrink: 0;
      }

      .vf-btn-reject,
      .vf-btn-accept {
        padding: 10px 24px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        border-radius: 2px;
        cursor: pointer;
        font-family: 'Lato', system-ui, sans-serif;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
        white-space: nowrap;
      }

      .vf-btn-reject {
        background: transparent;
        color: #8A8A82;
        border: 1px solid #4A4A46;
      }

      .vf-btn-reject:hover {
        color: #C8C0B0;
        border-color: #8A8A82;
      }

      .vf-btn-accept {
        background: #C8A870;
        color: #1C1C1A;
        border: 1px solid #C8A870;
      }

      .vf-btn-accept:hover {
        background: #E0C090;
        border-color: #E0C090;
      }

      @media (max-width: 640px) {
        .vf-cookie-inner {
          padding: 0 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .vf-cookie-actions {
          width: 100%;
        }
        .vf-btn-reject,
        .vf-btn-accept {
          flex: 1;
          text-align: center;
          justify-content: center;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ── Init: controlla consenso esistente ───────────────────
  function init() {
    const consent = getConsent();

    if (consent === 'accepted') {
      // Consenso già dato → carica analytics subito
      enableAnalytics();
      return;
    }

    if (consent === 'rejected') {
      // Rifiuto già registrato → non fare nulla
      return;
    }

    // Nessuna scelta ancora → mostra il banner
    injectStyles();
    // Aspetta che il DOM sia pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createBanner);
    } else {
      createBanner();
    }
  }

  init();
})();
