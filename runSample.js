const puppeteer = require('puppeteer');
 
(async () => {
  console.log("Opening browser...");
  const browser = await puppeteer.launch();
  console.log("Opening new tab...");
  const page = await browser.newPage();
  console.log("Setting viewport...");
  await page.setViewport({width: 1920, height: 1080});
  console.log("Connecting to website...");
  await page.goto('https://www.cleverbot.com/');
  console.log("Taking screenshot...");
  let scp = 'Screenshot-' + Date.now() +'.png';
  await page.screenshot({path: scp});
  console.log("Screenshot saved to '" + scp + "'");
  console.log("Closing browser...");
  await browser.close();
  console.log("Done!");
})();