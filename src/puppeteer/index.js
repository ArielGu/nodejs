const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(); // headless, devtools
  const page = await browser.newPage();
  await page.goto('http://huziketang.mangojuice.top/books/react/');
  await page.pdf({path: 'react.pdf', format: 'A4'});
  await browser.close();
})();
