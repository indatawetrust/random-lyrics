const request = require('request');
const cheerio = require('cheerio');

module.exports = () => new Promise((resolve, reject) => {
  request('https://www.bestrandoms.com/random-lyrics', (err, res, body) => {
    if (!err && res.statusCode == 200) {
      const $ = cheerio.load(body);

      const song = {
        artist: $(
          '#main > div > div.col-xs-12.col-sm-9.main > ul > li > p.text-center.font-18 > span:nth-child(1)',
        ).text(),
        song: $(
          '#main > div > div.col-xs-12.col-sm-9.main > ul > li > p.text-center.font-18 > span:nth-child(2)',
        ).text(),
        lyrics: $(
          '#main > div > div.col-xs-12.col-sm-9.main > ul > li > p:nth-child(2) > b > span',
        )
          .html()
          .replace(/&quot;|&apos;/g, ''),
      };

      resolve(song);
    } else {
      reject(err);
    }
  });
});
