/**
 * VIA FIRENZE — Admin Authentication
 *
 * ⚠️  NOTA DI SICUREZZA:
 * Questa protezione è lato client ed è sufficiente per un sito statico
 * personale. La password è visibile nel sorgente JS.
 * Per sicurezza reale, proteggere questa pagina lato server o con
 * Netlify/Vercel password protection (Environment → Password Protection).
 *
 * Come abilitare su Vercel:
 *   Dashboard → Settings → Password Protection → Enable
 * Come abilitare su Netlify:
 *   Dashboard → Site settings → Access control → Password
 */

(function () {
  'use strict';

  // ── Configurazione ────────────────────────────────────────────
  const ADMIN_PASSWORD   = 'admin123';   // ← cambia questa password
  const MAX_ATTEMPTS     = 3;            // tentativi prima del blocco
  const LOCKOUT_SECONDS  = 30;           // durata blocco in secondi
  const SESSION_KEY      = 'adminAuth';
  const LOG_KEY          = 'vf_admin_fail_log';
  const LOCKOUT_KEY      = 'vf_admin_lockout';

  // ── Riferimenti DOM ───────────────────────────────────────────
  const loginScreen = document.getElementById('admin-login');
  const adminPanel  = document.getElementById('admin-panel');
  const errorEl     = document.getElementById('login-error');
  const loginBtn    = document.getElementById('login-btn');
  const passInput   = document.getElementById('login-pass');

  // ── Utilities log ─────────────────────────────────────────────
  function getFailLog() {
    try { return JSON.parse(localStorage.getItem(LOG_KEY) || '[]'); }
    catch { return []; }
  }

  function addFailLog(entry) {
    const log = getFailLog();
    log.unshift(entry);               // più recente in cima
    log.splice(50);                   // mantieni max 50 voci
    localStorage.setItem(LOG_KEY, JSON.stringify(log));
  }

  // ── Rate limiting ─────────────────────────────────────────────
  function getLockoutData() {
    try { return JSON.parse(localStorage.getItem(LOCKOUT_KEY) || 'null'); }
    catch { return null; }
  }

  function setLockout() {
    const data = {
      until:    Date.now() + LOCKOUT_SECONDS * 1000,
      attempts: MAX_ATTEMPTS
    };
    localStorage.setItem(LOCKOUT_KEY, JSON.stringify(data));
  }

  function clearLockout() {
    localStorage.removeItem(LOCKOUT_KEY);
  }

  function getRemainingAttempts() {
    const log    = getFailLog();
    const cutoff = Date.now() - LOCKOUT_SECONDS * 1000;
    // conta solo i tentativi recenti (dentro la finestra temporale)
    return MAX_ATTEMPTS - log.filter(e => e.ts > cutoff).length;
  }

  /**
   * Controlla se l'utente è bloccato.
   * @returns {number|null} secondi rimanenti, o null se non bloccato
   */
  function checkLockout() {
    const data = getLockoutData();
    if (!data) return null;
    const remaining = Math.ceil((data.until - Date.now()) / 1000);
    if (remaining <= 0) {
      clearLockout();
      return null;
    }
    return remaining;
  }

  // ── Mostra errore con countdown ───────────────────────────────
  function showError(msg) {
    errorEl.textContent    = msg;
    errorEl.style.display  = 'block';
  }

  function hideError() {
    errorEl.style.display = 'none';
  }

  function startCountdown(seconds) {
    loginBtn.disabled = true;
    passInput.disabled = true;

    let remaining = seconds;
    showError(`Troppi tentativi falliti. Riprova tra ${remaining}s.`);

    const timer = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        clearInterval(timer);
        clearLockout();
        loginBtn.disabled  = false;
        passInput.disabled = false;
        hideError();
        passInput.focus();
      } else {
        showError(`Troppi tentativi falliti. Riprova tra ${remaining}s.`);
      }
    }, 1000);
  }

  // ── Mostra pannello admin ─────────────────────────────────────
  function showPanel() {
    loginScreen.style.display = 'none';
    adminPanel.style.display  = 'block';
    if (typeof refreshUI === 'function') refreshUI();
  }

  // ── Controlla sessione esistente ──────────────────────────────
  function checkSession() {
    if (sessionStorage.getItem(SESSION_KEY) === '1') {
      showPanel();
      return;
    }

    // Controlla lockout attivo al caricamento della pagina
    const locked = checkLockout();
    if (locked) startCountdown(locked);
  }

  // ── Tentativo di login ────────────────────────────────────────
  function attemptLogin() {
    // 1. Controlla lockout
    const locked = checkLockout();
    if (locked) {
      startCountdown(locked);
      return;
    }

    const pass = passInput.value;

    // 2. Password corretta
    if (pass === ADMIN_PASSWORD) {
      clearLockout();
      sessionStorage.setItem(SESSION_KEY, '1');
      hideError();
      showPanel();
      return;
    }

    // 3. Password errata → logga il tentativo
    addFailLog({
      ts:        Date.now(),
      date:      new Date().toISOString(),
      userAgent: navigator.userAgent.slice(0, 80)
    });

    const remaining = getRemainingAttempts();
    passInput.value = '';
    passInput.focus();

    if (remaining <= 0) {
      // Blocca
      setLockout();
      startCountdown(LOCKOUT_SECONDS);
    } else {
      showError(
        remaining === 1
          ? 'Password errata. Ultimo tentativo prima del blocco.'
          : `Password errata. Tentativi rimasti: ${remaining}.`
      );
    }
  }

  // ── Logout ────────────────────────────────────────────────────
  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    adminPanel.style.display  = 'none';
    loginScreen.style.display = 'flex';
    passInput.value = '';
    passInput.focus();
  }

  // ── Password toggle (show/hide) ───────────────────────────────
  function initPasswordToggle() {
    const toggle = document.getElementById('pass-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const isPassword = passInput.type === 'password';
      passInput.type = isPassword ? 'text' : 'password';
      toggle.innerHTML = isPassword
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94
                      M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19
                      m-6.72-1.07a3 3 0 11-4.24-4.24"/>
             <line x1="1" y1="1" x2="23" y2="23"/>
           </svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
             <circle cx="12" cy="12" r="3"/>
           </svg>`;
    });
  }

  // ── Event listeners ───────────────────────────────────────────
  loginBtn.addEventListener('click', attemptLogin);
  passInput.addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  // ── Init ──────────────────────────────────────────────────────
  initPasswordToggle();
  checkSession();

})();
