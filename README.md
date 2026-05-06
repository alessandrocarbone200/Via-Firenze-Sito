# VIA FIRENZE — Guida Operativa

Guida completa per pubblicare, gestire e mantenere il sito viafirenze.it.  
Scritta per chi non ha esperienza tecnica.

---

## Indice

1. [Pubblicare su Vercel](#1-pubblicare-su-vercel)
2. [Collegare un dominio personalizzato](#2-collegare-un-dominio-personalizzato)
3. [Verificare che HTTPS funzioni](#3-verificare-che-https-funzioni)
4. [Google Search Console](#4-google-search-console)
5. [Inviare la sitemap a Google](#5-inviare-la-sitemap-a-google)
6. [Collegare Formspree al form contatti](#6-collegare-formspree-al-form-contatti)
7. [Aggiungere o modificare un prodotto](#7-aggiungere-o-modificare-un-prodotto)
8. [Sostituire le immagini](#8-sostituire-le-immagini)
9. [Google Analytics 4 con consenso GDPR](#9-google-analytics-4-con-consenso-gdpr)
10. [Backup su GitHub](#10-backup-su-github)
11. [Sicurezza](#11-sicurezza)

---

## 1. Pubblicare su Vercel

> Vercel è la piattaforma di hosting gratuita su cui gira il sito.  
> Ogni volta che modifichi i file su GitHub, il sito si aggiorna automaticamente.

### Prima volta — configurazione iniziale

**Passo 1 — Crea un account GitHub**
1. Vai su [github.com](https://github.com) e clicca **Sign up**
2. Registrati con la tua email
3. Scegli il piano **Free**

**Passo 2 — Carica i file su GitHub**
1. Una volta dentro GitHub, clicca **+** in alto a destra → **New repository**
2. Nome repository: `divani-website` (o il nome che preferisci)
3. Lascia **Public** (oppure **Private** se vuoi tenerlo privato)
4. Clicca **Create repository**
5. Nella pagina del repository, clicca **uploading an existing file**
6. Trascina tutti i file e le cartelle del progetto (`index.html`, `css/`, `js/`, `images/`, ecc.)
7. Scrivi un messaggio tipo "Prima pubblicazione" e clicca **Commit changes**

**Passo 3 — Crea un account Vercel**
1. Vai su [vercel.com](https://vercel.com) e clicca **Sign Up**
2. Scegli **Continue with GitHub** — in questo modo Vercel e GitHub sono collegati automaticamente

**Passo 4 — Importa il progetto su Vercel**
1. Nella dashboard di Vercel clicca **Add New… → Project**
2. Trova il repository `divani-website` e clicca **Import**
3. Non cambiare nessuna impostazione — clicca direttamente **Deploy**
4. Aspetta 30-60 secondi: il sito è online!

Vercel ti darà un indirizzo temporaneo tipo `divani-website.vercel.app` — funziona subito.

### Aggiornare il sito in futuro

Ogni volta che vuoi modificare qualcosa:
1. Vai sul repository GitHub
2. Clicca sul file da modificare → icona matita ✏️ → modifica → **Commit changes**
3. Vercel rileva la modifica e aggiorna il sito in automatico entro 1 minuto

---

## 2. Collegare un dominio personalizzato

> Esempio: comprare `viafirenze.it` e collegarlo al sito Vercel.

**Passo 1 — Acquista il dominio**

Registra il dominio su uno di questi provider italiani:
- [Register.it](https://www.register.it) — consigliato per domini `.it`
- [Aruba](https://www.aruba.it)
- [Namecheap](https://www.namecheap.com)

**Passo 2 — Aggiungi il dominio su Vercel**
1. Vai su Vercel → seleziona il tuo progetto → **Settings → Domains**
2. Scrivi il tuo dominio (es. `viafirenze.it`) e clicca **Add**
3. Vercel ti mostrerà due valori da copiare: un record **A** e un record **CNAME**

**Passo 3 — Configura il DNS sul registrar**
1. Accedi al pannello del tuo registrar (Register.it, Aruba, ecc.)
2. Vai nella sezione **DNS** o **Gestione DNS** del dominio
3. Aggiungi i record che Vercel ti ha fornito:
   - Record **A**: punta all'IP di Vercel (`76.76.21.21`)
   - Record **CNAME** per `www`: punta a `cname.vercel-dns.com`
4. Salva

**Attesa:** la propagazione DNS richiede da 10 minuti a 48 ore.  
Puoi controllare lo stato su [dnschecker.org](https://dnschecker.org).

---

## 3. Verificare che HTTPS funzioni

Vercel attiva HTTPS in automatico tramite certificati SSL gratuiti (Let's Encrypt).

**Come verificare:**
1. Apri il sito nel browser (`https://viafirenze.it`)
2. Controlla che nella barra dell'indirizzo ci sia il **lucchetto 🔒**
3. Prova ad aprire `http://viafirenze.it` (senza S): deve reindirizzare automaticamente alla versione HTTPS

**Se il lucchetto non appare:**
- Aspetta che la propagazione DNS sia completata
- Vai su Vercel → **Settings → Domains** e controlla che il dominio sia verde con ✓

---

## 4. Google Search Console

> Search Console permette a Google di conoscere il tuo sito e mostrarti quante persone lo trovano su Google.

**Passo 1 — Accedi a Search Console**
1. Vai su [search.google.com/search-console](https://search.google.com/search-console)
2. Accedi con il tuo account Google

**Passo 2 — Aggiungi il sito**
1. Clicca **Aggiungi proprietà**
2. Scegli **Prefisso URL** e inserisci `https://viafirenze.it`
3. Clicca **Continua**

**Passo 3 — Verifica la proprietà**

Il metodo più semplice con Vercel:
1. Google ti darà un file HTML da scaricare (es. `google1234abcd.html`)
2. Caricalo nella root del repository GitHub (stessa cartella di `index.html`)
3. Vercel lo pubblica automaticamente
4. Torna su Search Console e clicca **Verifica**

---

## 5. Inviare la sitemap a Google

> La sitemap aiuta Google a trovare e indicizzare tutte le pagine del sito più velocemente.

Il file `sitemap.xml` è già presente nella root del progetto.

**Come inviarlo:**
1. Vai su Google Search Console → seleziona il tuo sito
2. Nel menu a sinistra clicca **Sitemap**
3. Nel campo "Aggiungi una nuova sitemap" scrivi: `sitemap.xml`
4. Clicca **Invia**

Google mostrerà quante pagine ha trovato. La prima indicizzazione può richiedere da qualche ora a qualche giorno.

---

## 6. Collegare Formspree al form contatti

> Formspree riceve i messaggi del form e te li invia per email.

**Se non hai ancora un account Formspree:**
1. Vai su [formspree.io](https://formspree.io) → **Get started** → registrati
2. Clicca **+ New Form** e dai un nome (es. "VIA FIRENZE Contatti")
3. Copia l'ID del form dall'URL (es. `https://formspree.io/f/xpwzgkab` → l'ID è `xpwzgkab`)

**Inserisci l'ID nel codice:**
1. Apri `contatti.html` su GitHub (clicca sul file → icona matita ✏️)
2. Cerca la riga:
   ```html
   action="https://formspree.io/f/mzdogwpe"
   ```
3. L'ID `mzdogwpe` è già il tuo — non devi cambiare nulla
4. Per verificare: compila il form sul sito e controlla che arrivi un'email

**Dove arrivano le email:**  
Le email arrivano all'indirizzo con cui ti sei registrato su Formspree.  
Puoi cambiarlo in Formspree → Settings → Notifications.

---

## 7. Aggiungere o modificare un prodotto

> Tutti i prodotti del sito sono definiti nel file `js/data.js`.

### Struttura di un prodotto

```javascript
{
  id: 7,                              // numero progressivo univoco
  nome: "Roma",                       // nome del divano
  sottotitolo: "Divano 3 posti",      // sottotitolo breve
  descrizione: "Descrizione lunga...",
  prezzoBase: 1390,                   // prezzo in euro (solo numero)
  categoria: "3-posti",               // "2-posti" | "3-posti" | "angolare" | "letto"
  tessuti: ["Velluto", "Lino"],       // lista tessuti disponibili
  colori: ["Grigio Perla", "Blu"],    // lista colori disponibili
  immagini: [
    "images/roma.jpg",                // immagine principale
    "images/roma_aperto.jpg",         // seconda immagine
    "images/roma_detail.jpg"          // terza immagine
  ],
  featured: true                      // true = appare in home page
}
```

### Aggiungere un nuovo prodotto

1. Apri `js/data.js` su GitHub (icona matita ✏️)
2. Vai in fondo all'array `DEFAULT_PRODUCTS`, prima della `]` di chiusura
3. Aggiungi una virgola dopo l'ultimo prodotto e incolla il blocco del nuovo prodotto
4. Carica le immagini nella cartella `/images` su GitHub
5. Clicca **Commit changes** — il prodotto appare subito nel catalogo

### Modificare un prodotto esistente

1. Apri `js/data.js` su GitHub
2. Trova il prodotto dal suo `nome` o `id`
3. Modifica i campi che vuoi (prezzo, descrizione, colori, ecc.)
4. Clicca **Commit changes**

### Eliminare un prodotto

1. Apri `js/data.js` su GitHub
2. Cancella l'intero blocco `{ ... }` del prodotto (dalla `{` alla `}` finale, compresa la virgola)
3. Clicca **Commit changes**

---

## 8. Sostituire le immagini

> Le immagini dei prodotti si trovano nella cartella `/images`.

### Nomi file consigliati

Usa nomi senza spazi, tutto minuscolo, con trattini:
- ✅ `colosseo.jpg`
- ✅ `arthur-aperto.jpg`  
- ❌ `Divano Colosseo (1).jpg`

### Come caricare nuove immagini

1. Vai sul repository GitHub → cartella `images`
2. Clicca **Add file → Upload files**
3. Trascina le immagini e clicca **Commit changes**

### Formato consigliato

| Tipo | Formato | Dimensioni consigliate |
|------|---------|----------------------|
| Prodotto (chiuso) | JPG | 800 × 600 px |
| Prodotto (aperto) | JPG | 800 × 600 px |
| Dettaglio tessuto | JPG | 800 × 600 px |
| Logo | PNG | originale |

Tieni le immagini sotto **300 KB** ciascuna per velocità ottimale.  
Puoi comprimerle gratis su [squoosh.app](https://squoosh.app) o [tinypng.com](https://tinypng.com).

### Collegare l'immagine al prodotto

Dopo aver caricato l'immagine, aggiorna il campo `immagini` in `js/data.js`:
```javascript
immagini: ["images/nome-file.jpg", "images/nome-file-2.jpg", "images/nome-file-3.jpg"]
```

---

## 9. Google Analytics 4 con consenso GDPR

> Il codice è già predisposto per attivare Analytics **solo dopo** che l'utente accetta i cookie.

### Passo 1 — Crea la proprietà GA4

1. Vai su [analytics.google.com](https://analytics.google.com)
2. Clicca **Inizia a misurare** e segui la procedura
3. Alla fine copia il tuo **Measurement ID** (formato: `G-XXXXXXXXXX`)

### Passo 2 — Inserisci l'ID nel codice

1. Apri `js/cookies.js` su GitHub (icona matita ✏️)
2. Trova la funzione `enableAnalytics()` (circa riga 15)
3. Sostituisci `G-XXXXXXXXXX` con il tuo Measurement ID reale:

```javascript
function enableAnalytics() {
  var s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-ILTUOID';
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ILTUOID');
}
```

4. Clicca **Commit changes**

**Come funziona il flusso GDPR:**
- Utente arriva sul sito → banner cookie appare
- Se clicca **Rifiuta** → Analytics non viene mai caricato ✅
- Se clicca **Accetta** → Analytics si attiva solo in quel momento ✅
- La scelta viene salvata in `localStorage` e rispettata nelle visite successive

---

## 10. Backup su GitHub

> GitHub è già il tuo sistema di backup. Ogni modifica è tracciata e puoi tornare indietro in qualsiasi momento.

### Vedere la cronologia delle modifiche

1. Vai sul repository GitHub
2. Clicca su **Commits** (in alto, sotto il nome del repository)
3. Vedi la lista di tutte le modifiche con data e messaggio

### Tornare a una versione precedente

1. Clicca sul commit a cui vuoi tornare
2. Apri il file che vuoi ripristinare → clicca **...** → **View file**
3. Copia il contenuto e incollalo nella versione attuale del file
4. Salva con **Commit changes**

### Scaricare una copia locale

1. Vai sul repository GitHub
2. Clicca il bottone verde **Code → Download ZIP**
3. Salva lo ZIP in un posto sicuro (es. Google Drive o un disco esterno)

---

## 11. Sicurezza

### Attivare 2FA (autenticazione a due fattori)

Attiva il 2FA su **tutti e tre** questi servizi — proteggono l'accesso al tuo sito:

**GitHub:**
1. Profilo → **Settings → Password and authentication**
2. Clicca **Enable two-factor authentication**
3. Usa un'app come Google Authenticator o ricevi SMS

**Vercel:**
1. Avatar in alto a destra → **Settings → Security**
2. Attiva **Two-Factor Authentication**

**Registrar del dominio (Register.it / Aruba / ecc.):**
- Cerca la voce "Sicurezza" o "Two-Factor Authentication" nelle impostazioni account

---

### Non inserire mai password nel codice

❌ **Mai fare questo:**
```javascript
const DB_PASSWORD = "miapassword123";
const API_KEY = "sk-abc123xyz";
```

✅ **Se hai bisogno di chiavi API:**
- Su Vercel usa le **Environment Variables**: Settings → Environment Variables
- Nel codice le recuperi come `process.env.NOME_VARIABILE` (solo lato server)

La password dell'admin in `js/admin-auth.js` è visibile nel codice sorgente perché il sito è statico. Per una protezione reale vedi il punto successivo.

---

### Proteggere admin.html con Vercel Password Protection

> Questa è la protezione più efficace per nascondere il pannello admin.

**Come attivare:**
1. Vai su Vercel → seleziona il progetto → **Settings → Deployment Protection**
2. Attiva **Password Protection**
3. Imposta una password forte
4. Salva

Da quel momento, chiunque tenti di aprire qualsiasi pagina del sito (inclusa `admin.html`) vedrà prima una schermata Vercel che chiede la password.

> ⚠️ Nota: questa funzione è disponibile nei piani Vercel Pro ($20/mese).  
> In alternativa gratuita, usa la protezione lato client già presente in `js/admin-auth.js` — è sufficiente per un sito personale.

---

## Riepilogo URL utili

| Servizio | URL |
|---------|-----|
| Repository GitHub | `github.com/TUO-USERNAME/divani-website` |
| Dashboard Vercel | `vercel.com/dashboard` |
| Formspree | `formspree.io/forms` |
| Google Search Console | `search.google.com/search-console` |
| Google Analytics | `analytics.google.com` |
| Verifica Rich Results | `search.google.com/test/rich-results` |
| Compressione immagini | `squoosh.app` |
| DNS Checker | `dnschecker.org` |

---

*Guida aggiornata al 2026 — VIA FIRENZE*
