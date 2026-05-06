const DEFAULT_PRODUCTS = [
  {
    id: 1,
    nome: "Colosseo",
    sottotitolo: "Divano 3 posti convertibile",
    descrizione: "Il Colosseo porta nel tuo salotto la maestosità dell'architettura italiana reinterpretata in forma di divano. La struttura robusta e l'imbottitura a molle insacchettate garantiscono un comfort duraturo, mentre il meccanismo di apertura scorrevole lo trasforma in un comodo letto matrimoniale in pochi secondi.",
    prezzoBase: 1490,
    categoria: "3-posti",
    tessuti: ["Tessuto Tecnico", "Velluto", "Lino"],
    colori: ["Grigio Perla", "Tortora", "Antracite", "Beige Sabbia"],
    immagini: ["images/colosseo.jpg", "images/colosseo_aperto.jpg", "images/colosseo_detail.jpg"],
    featured: true
  },
  {
    id: 2,
    nome: "Arthur",
    sottotitolo: "Divano 2 posti convertibile",
    descrizione: "Arthur è il perfetto compagno per gli spazi urbani: compatto nelle dimensioni, generoso nel comfort. Il suo design pulito e contemporaneo si adatta a qualsiasi ambiente, mentre il pratico meccanismo trasforma il divano in un letto singolo o matrimoniale con un solo gesto.",
    prezzoBase: 1190,
    categoria: "letto",
    tessuti: ["Microfibra", "Tessuto Tecnico", "Velluto"],
    colori: ["Grigio Nebbia", "Ecru", "Blu Oceano", "Antracite"],
    immagini: ["images/arthur.jpg", "images/arthur_aperto.jpg", "images/arthur_detail.jpg"],
    featured: true
  },
  {
    id: 3,
    nome: "Giulia",
    sottotitolo: "Divano 2 posti elegante",
    descrizione: "Giulia incarna la femminilità e l'eleganza del design italiano. Le sue linee morbide e i cuscini avvolgenti creano un'atmosfera di calore e raffinatezza. Disponibile in una ricca palette di colori, si adatta perfettamente a ogni stile di arredamento.",
    prezzoBase: 990,
    categoria: "2-posti",
    tessuti: ["Velluto", "Lino", "Bouclé"],
    colori: ["Verde Salvia", "Rosa Antico", "Grigio Perla", "Tortora"],
    immagini: ["images/giulia.jpg", "images/giulia_detail.jpg", "images/giulia.jpg"],
    featured: true
  },
  {
    id: 4,
    nome: "Capri",
    sottotitolo: "Divano 3 posti modulare",
    descrizione: "Ispirato alle terrazze che si affacciano sul mare azzurro della Costiera Amalfitana, il Capri porta in casa la leggerezza e il glamour della riviera italiana. La struttura modulare permette di configurare il divano liberamente, adattandosi a qualsiasi esigenza.",
    prezzoBase: 1390,
    categoria: "3-posti",
    tessuti: ["Lino", "Cotone", "Tessuto Tecnico"],
    colori: ["Bianco Puro", "Blu Capri", "Sabbia", "Terracotta"],
    immagini: ["images/capri.jpg", "images/capri_2.jpg", "images/capri_3.jpg"],
    featured: true
  },
  {
    id: 5,
    nome: "Jeanne",
    sottotitolo: "Divano letto con contenitore",
    descrizione: "Jeanne è l'equilibrio perfetto tra stile parigino e funzionalità italiana. Il meccanismo brevettato permette di aprire il letto senza spostare i cuscini, mantenendo l'estetica impeccabile anche durante il riposo. Il vano contenitore integrato offre ulteriore spazio salvavita.",
    prezzoBase: 1290,
    categoria: "letto",
    tessuti: ["Tessuto Tecnico", "Microfibra", "Lino"],
    colori: ["Grigio Fumo", "Cipria", "Écru", "Antracite"],
    immagini: ["images/jeanne.jpg", "images/jeanne_aperto.jpg", "images/jeanne_detail.jpg"],
    featured: false
  },
  {
    id: 6,
    nome: "Raffaelle",
    sottotitolo: "Divano angolare convertibile",
    descrizione: "Il Raffaelle è il protagonista assoluto di ogni grande salotto. Il suo imponente divano angolare nasconde un meccanismo di apertura che crea un'area notte generosa, perfetta per ospitare con stile. La penisola orientabile permette di configurare l'angolo a destra o sinistra.",
    prezzoBase: 1890,
    categoria: "angolare",
    tessuti: ["Tessuto Tecnico", "Velluto", "Pelle Ecologica"],
    colori: ["Antracite", "Grigio Chiaro", "Tortora", "Beige Cammello"],
    immagini: ["images/raffaelle.jpg", "images/raffaelle_aperto.jpg", "images/raffaelle.jpg"],
    featured: true
  },
  {
    id: 7,
    nome: "Luca",
    sottotitolo: "Divano letto 3 posti",
    descrizione: "Luca combina un design senza tempo con una funzionalità eccezionale. La struttura in legno massiccio e le molle biconica offrono un supporto ottimale sia come divano che come letto. Il materasso incluso in memory foam garantisce un riposo di qualità superiore.",
    prezzoBase: 1190,
    categoria: "letto",
    tessuti: ["Microfibra", "Tessuto Tecnico"],
    colori: ["Grigio Pietra", "Tortora", "Ecru", "Nero"],
    immagini: ["images/luca.jpg", "images/luca_aperto.jpg", "images/luca.jpg"],
    featured: false
  },
  {
    id: 8,
    nome: "Myto",
    sottotitolo: "Divano 2 posti compatto",
    descrizione: "Myto è la scelta ideale per chi non vuole rinunciare allo stile anche in spazi ridotti. Il suo design minimalista e contemporaneo si inserisce perfettamente in monolocali e appartamenti moderni, mentre il meccanismo di apertura ottimizzato massimizza lo spazio disponibile.",
    prezzoBase: 890,
    categoria: "2-posti",
    tessuti: ["Tessuto Tecnico", "Microfibra"],
    colori: ["Grigio", "Antracite", "Beige", "Blu Denim"],
    immagini: ["images/myto.jpg", "images/myto_aperto.jpg", "images/myto.jpg"],
    featured: false
  },
  {
    id: 9,
    nome: "Luigi",
    sottotitolo: "Divano 3 posti convertibile",
    descrizione: "Luigi porta nelle case italiane il calore della tradizione artigianale unita alla modernità del design contemporaneo. La struttura robusta in legno di faggio e l'imbottitura a schiuma HD garantiscono una durata nel tempo eccezionale.",
    prezzoBase: 1290,
    categoria: "3-posti",
    tessuti: ["Lino", "Velluto", "Tessuto Tecnico"],
    colori: ["Tortora", "Grigio Perla", "Beige", "Verde Salvia"],
    immagini: ["images/luigi.jpg", "images/luigi_aperto.jpg", "images/luigi.jpg"],
    featured: false
  },
  {
    id: 10,
    nome: "Dallas",
    sottotitolo: "Maxi angolare convertibile",
    descrizione: "Dallas ridefinisce il concetto di comfort con il suo maxi angolare dalle proporzioni generose. L'ampia chaise longue orientabile diventa un'area notte spaziosa perfetta per tutta la famiglia. Il design bold e contemporaneo lo rende il punto focale di qualsiasi ambiente.",
    prezzoBase: 2190,
    categoria: "angolare",
    tessuti: ["Tessuto Tecnico", "Pelle Ecologica"],
    colori: ["Grigio Antracite", "Tortora", "Nero", "Beige Cammello"],
    immagini: ["images/dallas.jpg", "images/dallas.jpg", "images/dallas.jpg"],
    featured: false
  }
];

const STORE_KEY = 'viaFirenzeProducts';

function getProducts() {
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

function formatPrice(price) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(price);
}
