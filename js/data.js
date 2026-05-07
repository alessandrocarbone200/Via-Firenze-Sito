// ============================================================
//  VIA FIRENZE — Dati prodotti
//  FONTE UNICA: Catalogo ViaFirenze 2026 (CAT_26_web.pdf)
//  Non modificare testi senza consultare il catalogo.
// ============================================================

const DEFAULT_PRODUCTS = [

  // ── 2 POSTI ─────────────────────────────────────────────

  {
    id: 2,
    nome: "Arthur",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello e truciolare. Meccanismo Rapidlit. Rivestimento in tessuto. Piedi in legno tinta wengé.",
    categoria: "2-posti",
    immagini: ["images/arthur.jpg", "images/arthur_aperto.jpg", "images/arthur_detail.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello e truciolare",
          "Rete a doghe elettrosaldate e cinghie sotto la seduta",
          "Materasso da 15 cm di spessore con schiuma di densità 30 kg/m³",
          "Seduta in schiuma di poliuretano espanso di densità 30 kg/m³",
          "Schienale in fiocco di poliuretano",
          "Rivestimento in tessuto",
          "Piedi in legno tinta wengé"
        ],
        en: [
          "Solid wood and particleboard frame",
          "Electrowelded slatted base and webbing under the seat",
          "15 cm thick mattress with 30 kg/m³ density foam",
          "30 kg/m³ density polyurethane foam seat",
          "Polyurethane flock backrest",
          "Fabric upholstery",
          "Wooden feet painted wengé"
        ],
        fr: [
          "Structure en bois massif et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier en flocon de polyuréthane",
          "Revêtements en tissu",
          "Pieds bois wengé"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 165, profondita: "92/205", altezza: 109 },
        { nome: "divano/letto — materasso 140", lunghezza: 185, profondita: "92/205", altezza: 109 },
        { nome: "divano/letto — materasso 160", lunghezza: 205, profondita: "92/205", altezza: 109 }
      ]
    }
  },

  {
    id: 3,
    nome: "Giulia",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello di faggio e truciolare. Meccanismo Rapidlit. Materasso da 20 cm. Disponibile in tessuto o pelle.",
    categoria: "2-posti",
    immagini: ["images/giulia.jpg", "images/giulia_detail.jpg", "images/giulia_ouvert.jpg"],
    featured: true,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello di faggio e truciolare",
          "Rete a doghe elettrosaldata e cinghie sotto la seduta",
          "Materasso spesso 20 cm con schiuma di densità 28 kg/m³",
          "Cuscino di seduta in schiuma di poliuretano di densità 30 kg/m³",
          "Schienale e braccioli in schiuma di poliuretano di densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "Electrically welded slatted base and webbing under the seat",
          "20 cm thick mattress with 28 kg/m³ density foam",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 20 cm mousse 28 kg/m³",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 175, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 195, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 215, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  {
    id: 8,
    nome: "Myto",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Disponibile in tessuto o pelle.",
    categoria: "2-posti",
    immagini: ["images/myto.jpg", "images/myto_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sulla seduta",
          "Materasso spesso 13 cm con schiuma di densità 21 kg/m³",
          "Cuscino di seduta in poliuretano espanso di densità 25 kg/m³",
          "Schienale e braccioli in poliuretano espanso di densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Frame in solid beech and particleboard",
          "Electro-welded mechanism and webbing on the seat",
          "13 cm thick mattress with 21 kg/m³ density foam",
          "25 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Upholstery in fabric or leather"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sur l'assise",
          "Matelas 13 cm en 21 kg/m³ de densité",
          "Assise en mousse polyuréthane 25 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtement en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 164, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 184, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 204, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  // ── 3 POSTI ─────────────────────────────────────────────

  {
    id: 1,
    nome: "Colosseo",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolato. Meccanismo Rapidlit. Poggiatesta regolabile. Disponibile in tessuto o pelle.",
    categoria: "3-posti",
    immagini: ["images/colosseo.jpg", "images/colosseo_aperto.jpg", "images/colosseo_detail.jpg"],
    featured: true,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolato",
          "Rete a doghe elettrosaldata e cinghie sotto la seduta",
          "Materasso spesso 15 cm con schiuma di densità 30 kg/m³",
          "Cuscino di seduta in poliuretano espanso di densità 30 kg/m³",
          "Schienale e poggiatesta in poliuretano espanso di densità 25 kg/m³",
          "Braccioli in poliuretano espanso di densità 25 kg/m³ con cuscini in schiuma di densità 18 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beech and particleboard frame",
          "Electrowelded slatted base and webbing under the seat",
          "15 cm thick mattress with 30 kg/m³ density foam",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and headrest",
          "25 kg/m³ density polyurethane foam armrests with 18 kg/m³ density foam cushions",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et têtière en mousse polyuréthane 25 kg/m³ de densité",
          "Accoudoir en mousse polyuréthane 25 kg/m³ de densité, avec coussins en mousse 18 kg/m³",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 190, profondita: "92/205", altezza: "90/110" },
        { nome: "divano/letto — materasso 140", lunghezza: 210, profondita: "92/205", altezza: "90/110" },
        { nome: "divano/letto — materasso 160", lunghezza: 230, profondita: "92/205", altezza: "90/110" }
      ]
    }
  },

  {
    id: 10,
    nome: "Dallas",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello e truciolare. Meccanismo Rapidlit. Materasso da 17 cm con fodera traspirante. Disponibile in tessuto.",
    categoria: "3-posti",
    immagini: ["images/dallas.jpg", "images/dallas_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello e truciolare",
          "Rete a doghe elettrosaldate e cinghie sotto la seduta",
          "Materasso da 17 cm di spessore con schiuma di densità 30 kg/m³ e un lato traspirante",
          "Seduta in poliuretano espanso di densità 30 kg/m³ rivestito in Dacron",
          "Schienale e braccioli in poliuretano espanso di densità 25 kg/m³ rivestiti in Dacron",
          "Rivestimento in tessuto"
        ],
        en: [
          "Solid wood and particleboard frame",
          "Electrowelded slatted base and webbing under the seat",
          "17 cm thick mattress with 30 kg/m³ density foam and one breathable side",
          "30 kg/m³ density polyurethane foam seat covered with Dacron",
          "25 kg/m³ density polyurethane foam backrest and armrests covered with Dacron",
          "Fabric upholstery"
        ],
        fr: [
          "Structure en bois massif et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 17 cm mousse en 30 kg/m³ une face antitranspiration",
          "Assise en mousse polyuréthane 30 kg/m³ de densité recouvert de Dacron",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité recouvert de Dacron",
          "Revêtements en tissu"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 190, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 210, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 230, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  {
    id: 15,
    nome: "Jolie",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Disponibile in tessuto o pelle.",
    categoria: "3-posti",
    immagini: ["images/jolie.jpg", "images/jolie_2.jpg", "images/jolie_detail.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sotto la seduta",
          "Materasso in schiuma di poliuretano espanso di spessore 15 cm con densità 30 kg/m³",
          "Cuscino di seduta in poliuretano espanso di densità 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso di densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beech and particleboard frame",
          "Electrowelded mechanism and webbing under the seat",
          "15 cm thick, 30 kg/m³ density foam mattress",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse 30 kg/m³ de densité",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 150, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 170, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 190, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  {
    id: 16,
    nome: "Leonardo",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Materasso da 14 cm. Disponibile in tessuto o pelle.",
    categoria: "3-posti",
    immagini: ["images/leonardo.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sotto la seduta",
          "Materasso in schiuma di poliuretano espanso di spessore 14 cm con densità 30 kg/m³",
          "Cuscino di seduta in poliuretano espanso di densità 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso di densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beech and particleboard frame",
          "Electrowelded mechanism and webbing under the seat",
          "14 cm thick, 30 kg/m³ density foam mattress",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sous l'assise",
          "Matelas en 14 cm mousse 30 kg/m³ de densité",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 175, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 195, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 215, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  // ── ANGOLARI ────────────────────────────────────────────

  {
    id: 6,
    nome: "Raffaelle",
    sottotitolo: "Divano letto angolare — materasso 70 · 80 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/raffaelle.jpg", "images/raffaelle_aperto.jpg", "images/raffaelle_2.jpg", "images/raffaelle_mod.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sulla seduta",
          "Materasso spesso 15 cm con schiuma di densità 30 kg/m³",
          "Cuscino di seduta in poliuretano espanso di densità 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso di densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Frame in solid beech and particleboard",
          "Electro-welded mechanism and webbing on the seat",
          "15 cm thick mattress with 30 kg/m³ density foam",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Upholstery in fabric or leather"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sur l'assise",
          "Matelas 15 cm en 30 kg/m³ de densité",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtement en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 70", lunghezza: 195, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 80", lunghezza: 215, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  {
    id: 9,
    nome: "Luigi",
    sottotitolo: "Divano letto con chaise longue — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo Rapidlit. Materasso da 17 cm. Chaise longue 160×80 cm. Disponibile in tessuto o microfibra.",
    categoria: "angolare",
    immagini: ["images/luigi.jpg", "images/luigi_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Rete a doghe elettrosaldata e cinghie sotto la seduta",
          "Materasso spesso 17 cm con schiuma di densità 30 kg/m³ e fodera traspirante",
          "Cuscino di seduta in poliuretano espanso di densità 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso di densità 25 kg/m³ rivestiti in Dacron",
          "Rivestimento in tessuto o microfibra",
          "Piedi cromati o in legno tinto wengé o chiaro"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "Electrically welded slatted base and webbing under the seat",
          "17 cm thick mattress with 30 kg/m³ density foam and breathable cover",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests covered with Dacron",
          "Fabric or microfiber upholstery",
          "Chrome, wengé, or light wood legs"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 17 cm mousse en 30 kg/m³ avec toile antitranspiration",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité recouvert de Dacron",
          "Revêtements en tissu ou microfibre",
          "Pieds chromés ou bois wengé ou clair"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 155, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 175, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 190, profondita: "92/205", altezza: 85 },
        { nome: "chaise longue",                lunghezza: 160, profondita: 80,        altezza: 85 }
      ]
    }
  },

  {
    id: 4,
    nome: "Capri",
    sottotitolo: "Divano letto — 205 cm",
    descrizione: "Struttura in legno massello di faggio e truciolato. Materasso da 15 cm. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/capri.jpg", "images/capri_2.jpg", "images/capri_3.jpg", "images/capri_4.jpg", "images/capri_5.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello di faggio e truciolato",
          "Materasso in schiuma da 15 cm con densità di 30 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "15 cm foam mattress with a density of 30 kg/m³",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Matelas en 15 cm mousse en 30 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — chiuso",  lunghezza: 205, profondita: 90,  altezza: 78 },
        { nome: "divano/letto — aperto",  lunghezza: 205, profondita: 175, altezza: 45 }
      ]
    }
  },

  {
    id: 13,
    nome: "Elba",
    sottotitolo: "Divano letto — 205 cm",
    descrizione: "Struttura in legno massello di faggio e truciolato. Materasso da 15 cm. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/elba.jpg", "images/elba_detail.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello di faggio e truciolato",
          "Materasso in schiuma da 15 cm con densità di 30 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "15 cm foam mattress with a density of 30 kg/m³",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Matelas en 15 cm mousse en 30 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — chiuso",  lunghezza: 205, profondita: 90,  altezza: 78 },
        { nome: "divano/letto — aperto",  lunghezza: 205, profondita: 175, altezza: 45 }
      ]
    }
  },

  {
    id: 14,
    nome: "Ischia",
    sottotitolo: "Divano letto — 205 cm",
    descrizione: "Struttura in legno massello di faggio e truciolato. Materasso da 15 cm. Disponibile in tessuto o pelle.",
    categoria: "angolare",
    immagini: ["images/ischia.jpg", "images/ischia_mask.jpg"],
    featured: true,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello di faggio e truciolato",
          "Materasso in schiuma da 15 cm con densità di 30 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "15 cm foam mattress with a density of 30 kg/m³",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Matelas en 15 cm mousse en 30 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — chiuso",  lunghezza: 205, profondita: 90,  altezza: 78 },
        { nome: "divano/letto — aperto",  lunghezza: 205, profondita: 175, altezza: 45 }
      ]
    }
  },

  // ── DIVANI LETTO ────────────────────────────────────────

  {
    id: 5,
    nome: "Jeanne",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Disponibile in tessuto o pelle.",
    categoria: "letto",
    immagini: ["images/jeanne.jpg", "images/jeanne_aperto.jpg", "images/jeanne_detail.jpg", "images/jeanne_particolare.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sotto la seduta",
          "Materasso in schiuma da 15 cm di spessore (densità 30 kg/m³)",
          "Cuscino di seduta in poliuretano espanso da 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso da 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "Electrowelded mechanism and webbing under the seat",
          "15 cm thick foam mattress (30 kg/m³ density)",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 160, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 180, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 195, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  {
    id: 7,
    nome: "Luca",
    sottotitolo: "Divano letto con poggiatesta — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Poggiatesta regolabile incluso. Disponibile in tessuto o pelle.",
    categoria: "letto",
    immagini: ["images/luca_intero.jpg?v=20260507-1", "images/luca_grigio_aperto.jpg?v=20260507-1", "images/luca_grigio_3.jpg", "images/luca_grigio_4.jpg"],
    colori: [
      { nome: "Grigio", hex: "#8496A9", immagini: ["images/luca_intero.jpg?v=20260507-1", "images/luca_grigio_aperto.jpg?v=20260507-1", "images/luca_grigio_3.jpg", "images/luca_grigio_4.jpg"] },
      { nome: "Verde", hex: "#7A9E8A", immagini: ["images/luca_verde.jpg?v=20260507-1", "images/luca_verde_aperto.jpg?v=20260507-1"] }
    ],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sotto la seduta",
          "Materasso in schiuma di 15 cm di spessore con densità 30 kg/m³",
          "Cuscino di seduta in poliuretano espanso con densità 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso con densità 25 kg/m³",
          "Poggiatesta in poliuretano espanso con densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beechwood and particleboard frame",
          "Electrowelded mechanism and webbing under the seat",
          "15 cm thick foam mattress with a density of 30 kg/m³",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "25 kg/m³ density polyurethane foam headrest",
          "Upholstery in fabric or leather"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³ de densité",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Têtière en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 175, profondita: "92/205", altezza: "90/110" },
        { nome: "divano/letto — materasso 140", lunghezza: 195, profondita: "92/205", altezza: "90/110" },
        { nome: "divano/letto — materasso 160", lunghezza: 215, profondita: "92/205", altezza: "90/110" }
      ]
    }
  },

  {
    id: 12,
    nome: "Como",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in faggio massello e truciolare. Meccanismo elettrosaldato. Disponibile in tessuto o pelle.",
    categoria: "letto",
    immagini: ["images/como.jpg", "images/como_aperto.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in faggio massello e truciolare",
          "Meccanismo elettrosaldato e cinghie sotto la seduta",
          "Materasso in schiuma di 15 cm di spessore con densità 30 kg/m³",
          "Cuscino di seduta in poliuretano espanso con densità 30 kg/m³",
          "Schienale e braccioli in poliuretano espanso con densità 25 kg/m³",
          "Rivestimento in tessuto o pelle"
        ],
        en: [
          "Solid beech and particleboard frame",
          "Electrowelded mechanism and webbing under the seat",
          "15 cm thick foam mattress with a density of 30 kg/m³",
          "30 kg/m³ density polyurethane foam seat cushion",
          "25 kg/m³ density polyurethane foam backrest and armrests",
          "Fabric or leather upholstery"
        ],
        fr: [
          "Structure en bois massif (hêtre) et bois aggloméré",
          "Mécanique électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³ de densité",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier et accoudoir en mousse polyuréthane 25 kg/m³ de densité",
          "Revêtements en tissu ou cuir"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 155, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 175, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 190, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  // ── JACK ────────────────────────────────────────────────
  {
    id: 17,
    nome: "Jack",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello e truciolare. Meccanismo Rapidlit. Rivestimento in tessuto. Piedi in legno tinta wengé.",
    categoria: "2-posti",
    immagini: ["images/blanche.jpg", "images/blanche_2.jpg", "images/blanche_detail.jpg", "images/blanche_117132_mod.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello e truciolare",
          "Rete a doghe elettrosaldate e cinghie sotto la seduta",
          "Materasso da 15 cm di spessore con schiuma di densità 30 kg/m³",
          "Seduta in schiuma di poliuretano espanso di densità 30 kg/m³",
          "Schienale in fiocco di poliuretano",
          "Rivestimento in tessuto",
          "Piedi in legno tinta wengé"
        ],
        en: [
          "Solid wood and particleboard frame",
          "Electrowelded slatted base and webbing under the seat",
          "15 cm thick mattress with 30 kg/m³ density foam",
          "30 kg/m³ density polyurethane foam seat",
          "Polyurethane flock backrest",
          "Fabric upholstery",
          "Wooden feet painted wengé"
        ],
        fr: [
          "Structure en bois massif et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier en flocon de polyuréthane",
          "Revêtements en tissu",
          "Pieds bois wengé"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 175, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 195, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 215, profondita: "92/205", altezza: 85 }
      ]
    }
  },

  // ── VITO ────────────────────────────────────────────────
  {
    id: 18,
    nome: "Vito",
    sottotitolo: "Divano letto — materasso 120 · 140 · 160 cm",
    descrizione: "Struttura in legno massello e truciolare. Meccanismo Rapidlit. Rivestimento in tessuto. Piedi in legno tinta wengé.",
    categoria: "3-posti",
    immagini: ["images/vito.jpg"],
    featured: false,
    schedaTecnica: {
      materiali: {
        it: [
          "Struttura in legno massello e truciolare",
          "Rete a doghe elettrosaldate e cinghie sotto la seduta",
          "Materasso da 15 cm di spessore con schiuma di densità 30 kg/m³",
          "Seduta in schiuma di poliuretano espanso di densità 30 kg/m³",
          "Schienale in fiocco di poliuretano",
          "Rivestimento in tessuto",
          "Piedi in legno tinta wengé"
        ],
        en: [
          "Solid wood and particleboard frame",
          "Electrowelded slatted base and webbing under the seat",
          "15 cm thick mattress with 30 kg/m³ density foam",
          "30 kg/m³ density polyurethane foam seat",
          "Polyurethane flock backrest",
          "Fabric upholstery",
          "Wooden feet painted wengé"
        ],
        fr: [
          "Structure en bois massif et bois aggloméré",
          "Sommier électrosoudé et sangles sous l'assise",
          "Matelas en 15 cm mousse en 30 kg/m³",
          "Assise en mousse polyuréthane 30 kg/m³ de densité",
          "Dossier en flocon de polyuréthane",
          "Revêtements en tissu",
          "Pieds bois wengé"
        ]
      },
      composizione: [
        { nome: "divano/letto — materasso 120", lunghezza: 190, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 140", lunghezza: 210, profondita: "92/205", altezza: 85 },
        { nome: "divano/letto — materasso 160", lunghezza: 230, profondita: "92/205", altezza: 85 }
      ]
    }
  }

];

// ── Storage helpers ───────────────────────────────────────

const STORE_KEY   = 'viaFirenzeProducts';
const VERSION_KEY = 'viaFirenzeVersion';
const CATALOG_VER = '2026-05-06f';

function getProducts() {
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

function resetProducts() {
  localStorage.removeItem(STORE_KEY);
  localStorage.removeItem(VERSION_KEY);
  return getProducts();
}
