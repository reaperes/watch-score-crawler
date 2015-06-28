var Crawler = require("simplecrawler");
var crawler = new Crawler('www.koreabaseball.com', '/Schedule/ScoreBoard/ScoreBoard.aspx', 80, 1);
var cheerio = require('cheerio');

crawler.maxConcurrency = 1;
crawler.maxDepth = 1;
crawler.on("fetchcomplete", function (queueItem, responseBuffer, response) {
  var html = responseBuffer.toString('utf-8'); // .replace(/[\r|\n]/g, '');
  var $ = cheerio.load(html);

  var teams = [];
  $('p.leftTeam').each(function (i, element) {
    teams.push(element);
  });
  $('p.rightTeam').each(function (i, element) {
    teams.push(element);
  });

  teams.map(function (team, idx) {
    var name = $(team).children('strong').text();
    var state = $(team.parent).children('strong').text();     // 경기전, 1회초, 1회말, ... , 경기종료
    console.log(name + ' - ' + state + '     ');              // terminal issue
  });
});

crawler.on('crawlstart', function () {
  console.log('crawl start');
});

crawler.on("complete",function() {
  console.log('complete');
});

module.exports = crawler;