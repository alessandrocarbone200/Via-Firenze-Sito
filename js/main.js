/* Shared utilities used across all pages */

const VF_ASSET_VERSION = '20260508-1';

function clearLegacyBrowserCaches() {
  const cleanupKey = 'vf_legacy_cache_cleanup';

  try {
    if (localStorage.getItem(cleanupKey) === VF_ASSET_VERSION) return;
  } catch (_) {}

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => Promise.all(registrations.map(registration => registration.unregister())))
      .catch(() => {});
  }

  if ('caches' in window) {
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .catch(() => {});
  }

  try {
    localStorage.setItem(cleanupKey, VF_ASSET_VERSION);
  } catch (_) {}
}

function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function setActiveNavLink() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initHamburger() {
  const btn  = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

function initScrollNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40 ? '0 2px 24px rgba(0,0,0,0.08)' : '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  clearLegacyBrowserCaches();
  setActiveNavLink();
  initHamburger();
  initScrollNav();
});
