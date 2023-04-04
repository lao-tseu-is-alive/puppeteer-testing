const puppeteer = require('puppeteer');

//TODO recevoir idaffaire et PHPSESSID.value en parametre ($_COOKIE['PHPSESSID'];)

const url = 'https://golux.lausanne.ch/goeland/affaire2/affaire_data.php?idaffaire=306760';
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setCookie({
        'name': 'PHPSESSID',
        'value': 'm1v9oebvn3muc45ob9pojmpl94',
        'domain': 'golux.lausanne.ch',
        'expires': Date.now() / 1000 + 10,
        'path': '/'
    });
    console.log(await page.cookies(url));
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.click('#btnShHiTout'); // to open all sections of the page
    await page.screenshot({path: 'example.png'});
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    await browser.close();
})();



