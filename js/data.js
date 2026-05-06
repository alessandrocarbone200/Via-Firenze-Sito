// ============================================================
//  VIA FIRENZE — Dati prodotti
//  FONTE UNICA: Catalogo ViaFirenze 2026 (CAT_26_web.pdf)
//  Non modificare descrizioni senza consultare il catalogo.
// ============================================================

const DEFAULT_PRODUCTS = [

  // ── 2 POSTI ─────────────────────────────────────────────

  {
    id: 2,
    nome: "Arthur",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello e pannello truciolare. Seduta in poliuretano espanso ad alta portanza (30 kg/m³). Schienale in fiocco poliuretano 25 kg/m³. Materasso da 15 cm, densità 30 kg/m³. Rivestimento in tessuto. Piedi in wengé.",
    categoria: "2-posti",
    immagini: ["images/arthur.jpg", "images/arthur_aperto.jpg", "images/arthur_detail.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Legno massello e pannello truciolare",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Fiocco poliuretano 25 kg/m³",
      rivestimento: "Tessuto — piedi in wengé",
      misure: [
        "L 120 × P 165 × H 109 cm",
        "L 140 × P 185 × H 109 cm",
        "L 160 × P 205 × H 109 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 3,
    nome: "Giulia",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³. Materasso da 20 cm, densità 28 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "2-posti",
    immagini: ["images/giulia.jpg", "images/giulia_detail.jpg"],
    featured: true,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 20 cm — densità 28 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 175 × H 85 cm",
        "L 140 × P 195 × H 85 cm",
        "L 160 × P 215 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 8,
    nome: "Myto",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta e schienale in poliuretano espanso 25 kg/m³. Materasso da 13 cm, densità 21 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "2-posti",
    immagini: ["images/myto.jpg", "images/myto_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 13 cm — densità 21 kg/m³",
      seduta: "Poliuretano espanso 25 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 164 × H 85 cm",
        "L 140 × P 184 × H 85 cm",
        "L 160 × P 204 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  // ── 3 POSTI ─────────────────────────────────────────────

  {
    id: 1,
    nome: "Colosseo",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolato. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³, con poggiatesta, braccioli e cuscini. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "3-posti",
    immagini: ["images/colosseo.jpg", "images/colosseo_aperto.jpg", "images/colosseo_detail.jpg"],
    featured: true,
    schedaTecnica: {
      struttura: "Faggio massello e truciolato",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano 25 kg/m³ + poggiatesta + braccioli + cuscini 18 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 190 × H 90/110 cm",
        "L 140 × P 210 × H 90/110 cm",
        "L 160 × P 230 × H 90/110 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 10,
    nome: "Dallas",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello e pannello truciolare. Seduta in poliuretano 30 kg/m³ con Dacron. Schienale in poliuretano 25 kg/m³ con Dacron. Materasso traspirante da 17 cm, densità 30 kg/m³. Disponibile in tessuto.",
    categoria: "3-posti",
    immagini: ["images/dallas.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Legno massello e pannello truciolare",
      materasso: "Spessore 17 cm — densità 30 kg/m³ — traspirante",
      seduta: "Poliuretano 30 kg/m³ + Dacron",
      schienale: "Poliuretano 25 kg/m³ + Dacron",
      rivestimento: "Tessuto",
      misure: [
        "L 120 × P 190 × H 85 cm",
        "L 140 × P 210 × H 85 cm",
        "L 160 × P 230 × H 85 cm"
      ],
      misureLetto: "larghezza 92 cm"
    }
  },

  {
    id: 15,
    nome: "Jolie",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "3-posti",
    immagini: ["images/jolie.jpg", "images/jolie_2.jpg", "images/jolie_detail.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 150 × H 85 cm",
        "L 140 × P 170 × H 85 cm",
        "L 160 × P 190 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 16,
    nome: "Leonardo",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³. Materasso da 14 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "3-posti",
    immagini: ["images/leonardo.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 14 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 175 × H 85 cm",
        "L 140 × P 195 × H 85 cm",
        "L 160 × P 215 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  // ── ANGOLARI ────────────────────────────────────────────

  {
    id: 6,
    nome: "Raffaelle",
    sottotitolo: "Divano letto angolare — mat. 70 · 80 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/raffaelle.jpg", "images/raffaelle_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "mat. 70 × P 195 × H 85 cm",
        "mat. 80 × P 215 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 9,
    nome: "Luigi",
    sottotitolo: "Divano letto con chaiselong — 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³ con Dacron. Materasso traspirante da 17 cm, densità 30 kg/m³. Chaiselong 160 × 80 cm. Disponibile in tessuto o microfibra. Piedi in finitura cromo, wengé o chiaro.",
    categoria: "angolare",
    immagini: ["images/luigi.jpg", "images/luigi_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 17 cm — densità 30 kg/m³ — traspirante",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano 25 kg/m³ + Dacron",
      rivestimento: "Tessuto o microfibra — piedi cromo / wengé / chiaro",
      misure: [
        "L 120 × P 155 × H 85 cm + chaiselong 160 × 80 cm",
        "L 140 × P 175 × H 85 cm + chaiselong 160 × 80 cm",
        "L 160 × P 190 × H 85 cm + chaiselong 160 × 80 cm"
      ],
      misureLetto: "larghezza 92 cm"
    }
  },

  {
    id: 4,
    nome: "Capri",
    sottotitolo: "Divano letto angolare — 205 cm",
    descrizione: "Struttura in faggio massello e truciolato. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/capri.jpg", "images/capri_2.jpg", "images/capri_3.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolato",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "—",
      schienale: "—",
      rivestimento: "Tessuto o pelle",
      misure: [
        "205 × 90 × 78 cm (divano)"
      ],
      misureLetto: "205 × 175 × 45 cm"
    }
  },

  {
    id: 13,
    nome: "Elba",
    sottotitolo: "Divano letto angolare — 205 cm",
    descrizione: "Struttura in faggio massello e truciolato. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/elba.jpg", "images/elba_detail.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolato",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "—",
      schienale: "—",
      rivestimento: "Tessuto o pelle",
      misure: [
        "205 × 90 × 78 cm (divano)"
      ],
      misureLetto: "205 × 175 × 45 cm"
    }
  },

  {
    id: 14,
    nome: "Ischia",
    sottotitolo: "Divano letto angolare — 205 cm",
    descrizione: "Struttura in faggio massello e truciolato. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/ischia.jpg"],
    featured: true,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolato",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "—",
      schienale: "—",
      rivestimento: "Tessuto o pelle",
      misure: [
        "205 × 90 × 78 cm (divano)"
      ],
      misureLetto: "205 × 175 × 45 cm"
    }
  },

  // ── DIVANI LETTO ────────────────────────────────────────

  {
    id: 5,
    nome: "Jeanne",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "letto",
    immagini: ["images/jeanne.jpg", "images/jeanne_aperto.jpg", "images/jeanne_detail.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 160 × H 85 cm",
        "L 140 × P 180 × H 85 cm",
        "L 160 × P 195 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 7,
    nome: "Luca",
    sottotitolo: "Divano letto con poggiatesta — 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³ con poggiatesta. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "letto",
    immagini: ["images/luca.jpg", "images/luca_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³ + poggiatesta 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 175 × H 90/110 cm",
        "L 140 × P 195 × H 90/110 cm",
        "L 160 × P 215 × H 90/110 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  },

  {
    id: 12,
    nome: "Como",
    sottotitolo: "Divano letto — larghezze 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e pannello truciolare. Seduta in poliuretano espanso 30 kg/m³. Schienale in poliuretano 25 kg/m³. Materasso da 15 cm, densità 30 kg/m³. Disponibile in tessuto o pelle.",
    categoria: "letto",
    immagini: ["images/como.jpg", "images/como_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      struttura: "Faggio massello e pannello truciolare",
      materasso: "Spessore 15 cm — densità 30 kg/m³",
      seduta: "Poliuretano espanso 30 kg/m³",
      schienale: "Poliuretano espanso 25 kg/m³",
      rivestimento: "Tessuto o pelle",
      misure: [
        "L 120 × P 155 × H 85 cm",
        "L 140 × P 175 × H 85 cm",
        "L 160 × P 190 × H 85 cm"
      ],
      misureLetto: "92 × 205 cm"
    }
  }

];

// ── Storage helpers ───────────────────────────────────────

const STORE_KEY    = 'viaFirenzeProducts';
const VERSION_KEY  = 'viaFirenzeVersion';
const CATALOG_VER  = '2026-05-06'; // Aggiorna questa stringa ogni volta che si modificano i prodotti

function getProducts() {
  // Se la versione salvata non corrisponde, cancella la cache e ricarica dal catalogo
  if (localStorage.getItem(VERSION_KEY) !== CATALOG_VER) {
    localStorage.setItem(STORE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem(VERSION_KEY, CATALOG_VER);
    return DEFAULT_PRODUCTS;
  }
  const stored = localStorage.getItem(STORE_KEY);
  if (!stored) {
    localStorage.setItem(STORE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(stored);
}

function saveProducts(products) {
  localStorage.setItem(STORE_KEY, JSON.stringify(products));
}

function addProduct(product) {
  const products = getProducts();
  const maxId = products.reduce((max, p) => Math.max(max, p.id), 0);
  product.id = maxId + 1;
  products.push(product);
  saveProducts(products);
  return product;
}

function deleteProduct(id) {
  const products = getProducts().filter(p => p.id !== id);
  saveProducts(products);
}

function getProductById(id) {
  return getProducts().find(p => p.id === parseInt(id));
}

// ── Reset helper (cancella localStorage e ricarica i dati dal catalogo) ──
function resetProducts() {
  localStorage.removeItem(STORE_KEY);
  return getProducts();
}
