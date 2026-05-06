# CLAUDE.md — Direttive per il sito VIA FIRENZE

## Progetto
Sito vetrina per **VIA FIRENZE** (Italian Furniture Shop S.r.l.) — esclusivamente HTML/CSS/JS vanilla, senza framework né build tool. Deployment su Vercel.

---

## Colore vinaccia (unico colore accent)

**Usa sempre e solo questo colore per tutti gli elementi accent:**
- HEX: `#56303F`
- RGB: `86, 48, 63`
- CSS variable: `var(--color-gold)` (definita in `css/styles.css`)

**Hover/focus interattivi:** `#3E2230` (vinaccia scurito ~15%)

Non usare varianti diverse (`#5C3044`, `#4a2537`, ecc.) — se ne trovi, correggile con `#56303F`.

---

## Fonte dati prodotti e azienda

**Tutte le informazioni su prodotti, modelli, dimensioni e dati aziendali devono provenire da fonti verificate:**
1. `js/data.js` — fonte di verità attuale per i 18 modelli di divani
2. Catalogo PDF ufficiale (da caricare) — quando disponibile, ha precedenza su data.js

**Non inventare mai** nomi di modelli, dimensioni, materiali o dati aziendali. Se un'informazione non è in data.js o nel catalogo, non scriverla.

**Dati aziendali verificati:**
- Ragione sociale: Italian Furniture Shop S.r.l.
- Brand: VIA FIRENZE
- P.IVA: 04136100403
- Sede legale: Via Enrico Fermi, 2 — 47034 Forlimpopoli (FC)
- Sede operativa / showroom: Via Firenze, 200/B — 47121 San Varano (FC)
- Tel: +39 320 952 3341
- Email: commercialeitalianfurniture@gmail.com

---

## Foto caricate dall'utente

Quando l'utente carica nuove foto da inserire nel sito:
1. Adattare la colorazione/saturazione per allinearsi alla palette del sito (beige caldi + vinaccia)
2. Assicurarsi che il contrasto e la temperatura cromatica siano coerenti con le immagini già presenti
3. Tutte le immagini prodotto devono avere sfondo neutro (bianco/beige) o ambiente coerente con il tone del brand

---

## Stack e convenzioni

- HTML5 semantico + CSS3 (variabili in `:root`) + JS ES6 vanilla
- Font: Playfair Display (serif) + Lato (sans-serif) da Google Fonts
- Nessun framework, nessun bundler, nessun npm
- Lingua UI: italiano; schede tecniche in `data.js`: IT/EN/FR
- Form backend: Formspree (ID: mzdogwpe)

---

## Cosa NON fare

- Non aggiungere funzionalità non richieste
- Non usare colori accent diversi dal vinaccia `#56303F`
- Non inserire dati prodotto/azienda non verificati
- Non creare file admin o pannelli di gestione senza backend reale
