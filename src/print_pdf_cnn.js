const puppeteer = require('puppeteer');
const url = 'https://edition.cnn.com';
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.screenshot({path: 'cnn_homepage_example.png'});
    await page.pdf({path: 'cnn_homepage.pdf', format: 'A4'});
    await browser.close();
})();



