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
  },
  {
    id: 11,
    nome: "Blanche",
    sottotitolo: "Divano 2 posti elegante",
    descrizione: "Blanche è la sintesi perfetta tra raffinatezza francese e maestria artigianale italiana. Le sue linee pulite e i dettagli ricercati lo rendono un pezzo d'arredo capace di valorizzare qualsiasi ambiente. La struttura leggera e i piedi in legno naturale completano un'estetica senza tempo.",
    prezzoBase: 1090,
    categoria: "2-posti",
    tessuti: ["Bouclé", "Velluto", "Lino"],
    colori: ["Bianco Avorio", "Grigio Perla", "Rosa Antico", "Écru"],
    immagini: ["images/blanche.jpg", "images/blanche_detail.jpg", "images/blanche_2.jpg"],
    featured: true
  },
  {
    id: 12,
    nome: "Como",
    sottotitolo: "Divano letto con apertura facilitata",
    descrizione: "Como prende il nome dalla perla della Lombardia e ne cattura l'eleganza discreta. Il meccanismo di apertura brevettato permette di trasformare il divano in un comodo letto matrimoniale con un gesto solo, senza spostare i cuscini. Perfetto per chi cerca funzionalità e stile in egual misura.",
    prezzoBase: 1390,
    categoria: "letto",
    tessuti: ["Tessuto Tecnico", "Microfibra", "Lino"],
    colori: ["Grigio Pietra", "Tortora", "Antracite", "Sabbia"],
    immagini: ["images/como.jpg", "images/como_aperto.jpg", "images/como.jpg"],
    featured: false
  },
  {
    id: 13,
    nome: "Elba",
    sottotitolo: "Divano 3 posti convertibile",
    descrizione: "Elba evoca la bellezza selvaggia dell'isola toscana: un divano dalle forme morbide e avvolgenti che invita al relax più profondo. La struttura in legno massiccio e l'imbottitura in piuma sintetica garantiscono un comfort eccezionale, mentre il meccanismo scorrevole lo trasforma in un letto in pochi secondi.",
    prezzoBase: 1490,
    categoria: "3-posti",
    tessuti: ["Lino", "Cotone", "Tessuto Tecnico"],
    colori: ["Bianco Puro", "Sabbia", "Verde Oliva", "Terracotta"],
    immagini: ["images/elba.jpg", "images/elba_detail.jpg", "images/elba.jpg"],
    featured: false
  },
  {
    id: 14,
    nome: "Ischia",
    sottotitolo: "Divano angolare modulare",
    descrizione: "Ischia celebra il glamour della più grande isola del Golfo di Napoli. Il suo design modulare e generoso è pensato per chi vuole creare un angolo relax esclusivo nel proprio salotto. La configurazione ad angolo è orientabile, così da adattarsi perfettamente a qualsiasi pianta.",
    prezzoBase: 1990,
    categoria: "angolare",
    tessuti: ["Tessuto Tecnico", "Velluto", "Pelle Ecologica"],
    colori: ["Blu Oceano", "Grigio Antracite", "Tortora", "Verde Bottiglia"],
    immagini: ["images/ischia.jpg", "images/ischia.jpg", "images/ischia.jpg"],
    featured: true
  },
  {
    id: 15,
    nome: "Jolie",
    sottotitolo: "Divano 2 posti con chaise longue",
    descrizione: "Jolie — grazioso in francese — è un divano che conquista al primo sguardo. La chaise longue integrata offre uno spazio relax irresistibile, mentre il design contemporaneo si inserisce con eleganza in qualsiasi ambiente. Disponibile in una ricca selezione di tessuti e colori per personalizzare ogni dettaglio.",
    prezzoBase: 1290,
    categoria: "angolare",
    tessuti: ["Velluto", "Bouclé", "Tessuto Tecnico"],
    colori: ["Rosa Antico", "Verde Salvia", "Grigio Perla", "Écru"],
    immagini: ["images/jolie.jpg", "images/jolie_2.jpg", "images/jolie_detail.jpg"],
    featured: true
  },
  {
    id: 16,
    nome: "Leonardo",
    sottotitolo: "Divano 3 posti di design",
    descrizione: "Leonardo porta la firma del genio italiano nel tuo salotto. Un divano che unisce proporzioni studiate, materiali pregiati e un comfort senza compromessi. La struttura in legno di faggio laccato e l'imbottitura multistrato lo rendono un pezzo destinato a durare nel tempo, migliorando ad ogni anno che passa.",
    prezzoBase: 1690,
    categoria: "3-posti",
    tessuti: ["Pelle Ecologica", "Velluto", "Tessuto Tecnico"],
    colori: ["Cognac", "Nero Ebano", "Grigio Antracite", "Bianco Avorio"],
    immagini: ["images/leonardo.jpg", "images/leonardo.jpg", "images/leonardo.jpg"],
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
