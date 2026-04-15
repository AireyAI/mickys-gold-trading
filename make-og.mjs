import puppeteer from '/Users/kyleairey/Desktop/wheelie_clean_website/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = resolve(__dirname, 'og-image.html');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(`file://${file}`, { waitUntil: 'networkidle0' });
// Wait for fonts
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: resolve(__dirname, 'og.png'), type: 'png' });
await browser.close();
console.log('Saved og.png');
