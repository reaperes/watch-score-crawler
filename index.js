var Crawler = require("simplecrawler");
var crawler = new Crawler('www.koreabaseball.com', '/Schedule/ScoreBoard/ScoreBoard.aspx', 80);

crawler.interval = 60 * 60 * 1000;
crawler.maxConcurrency = 1;
crawler.maxDepth = 1;

crawler.on("fetchcomplete", function (queueItem, responseBuffer, response) {
  var html = responseBuffer.toString('utf-8');
});

crawler.start();