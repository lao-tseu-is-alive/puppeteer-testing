# puppeteer-testing
[Puppeteer](https://github.com/puppeteer/puppeteer) testing for trying to control headless chrome  browser by code
using [Node JS](https://nodejs.org/en)

## How to install dependencies on an headless server
after the usual stuf :

+ git clone https://github.com/lao-tseu-is-alive/puppeteer-testing.git
+ cd puppeteer-testing
+ npm i
+ npm run

if you got an error, may be try :

```bash
sudo npm install -g puppeteer --unsafe-perm=true -allow-root && sudo apt install chromium-browser -y
```
if it still does not work may be try :
```bash
sudo apt update && sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

### Links to related info
* [Getting Started with Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome "Google's chrome headless browser article")
* [The power of Headless Chrome and browser automation (Google I/O '18)](https://www.youtube.com/watch?v=lhZOFUY1weo&t=1526s "Youtube Video")
* [Puppeteer: Google nodejs lib to control headless Chrome](https://developers.google.com/web/tools/puppeteer/)
* [Puppeeter examples](https://developers.google.com/web/tools/puppeteer/examples)
* [Use case-driven examples for using Puppeteer and headless chrome ](https://github.com/GoogleChromeLabs/puppeteer-examples "Puppeeter examples in Github")
* [Puppeteer API ](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)
* [Puppeteer Github Repo](https://github.com/GoogleChrome/puppeteer) 
* [Puppeteer on an Ubuntu Aws Ec2 instance](https://dev.to/chis0m/installing-puppeteer-on-an-ubuntu-aws-ec2-instance-5o7)
