const https = require('https');
const scrape = require('website-scraper');

const options = {
  urls: [
    'http://worrydream.com/EarlyHistoryOfSmalltalk/'
  ],
  directory: './output/',
  recursive: false,
  maxRecursiveDepth: 2,
};

(async () => {
  await scrape(options);
})();
