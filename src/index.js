const puppeteer = require('puppeteer');
const url = 'https://golux.lausanne.ch/goeland/enveloppe/enveloppe_liste.php';
//const url = 'https://cartonew.lausanne.ch/';
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setCookie({
    'name': 'PHPSESSID',
    'value': 'vccquc8ehg6bnv49m29q4stdt6',
    'domain': 'golux.lausanne.ch',
    'expires': Date.now() / 1000 + 10,
    'path': '/'
  });
  console.log(await page.cookies(url));
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.screenshot({path: 'example.png'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});
  await browser.close();
})();