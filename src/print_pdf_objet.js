const puppeteer = require('puppeteer');

//TODO recevoir idObjet et PHPSESSID.value en parametre ($_COOKIE['PHPSESSID'];)



//const url = 'https://golux.lausanne.ch/goeland/enveloppe/enveloppe_liste.php';
//const url = 'https://cartonew.lausanne.ch/';
const url = 'https://golux.lausanne.ch/goeland/objet/getobjetinfo.php?idObjet=';
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setCookie({
        'name': 'PHPSESSID',
        'value': 'm1s7dujg5sfsma4kv7i9fbq3t5',
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



