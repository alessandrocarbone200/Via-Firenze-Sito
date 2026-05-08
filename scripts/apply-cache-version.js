const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const version = (
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.VERCEL_DEPLOYMENT_ID ||
  new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 12)
).slice(0, 12);

const files = [
  'index.html',
  'catalogo.html',
  'prodotto.html',
  'azienda.html',
  'contatti.html',
  'punti-vendita.html',
  'privacy-policy.html',
  'cookie-policy.html',
  'js/data.js',
  'js/main.js'
];

function updateFile(file) {
  const filePath = path.join(root, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content
    .replace(/js\/data\.js\?v=[^"]+/g, `js/data.js?v=${version}`)
    .replace(/js\/main\.js\?v=[^"]+/g, `js/main.js?v=${version}`)
    .replace(/const PRODUCT_IMAGE_VERSION = '[^']+';/g, `const PRODUCT_IMAGE_VERSION = '${version}';`)
    .replace(/const VF_ASSET_VERSION = '[^']+';/g, `const VF_ASSET_VERSION = '${version}';`);

  fs.writeFileSync(filePath, content);
}

files.forEach(updateFile);

console.log(`Applied cache version: ${version}`);
