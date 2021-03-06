var Crawler = require("simplecrawler");
var crawler = new Crawler('www.koreabaseball.com', '/Schedule/ScoreBoard/ScoreBoard.aspx', 80, 1);
var cheerio = require('cheerio');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('watch_score', 'root', '');
var teamService = require('./domain/team/teamservice')(sequelize);
var gameService = require('./domain/game/gameservice')(sequelize);


crawler.maxConcurrency = 1;
crawler.maxDepth = 1;
crawler.on("fetchcomplete", function (queueItem, responseBuffer, response) {
  var html = responseBuffer.toString('utf-8'); // .replace(/[\r|\n]/g, '');
  var $ = cheerio.load(html);
  var teams = parseTeam($);

  teams.map(function (team, idx) {
    var name = $(team).children('strong').text();
    var state = $(team.parent).children('strong').text();     // 경기전, 1회초, 1회말, ... , 경기종료
    switch(state) {
      case '경기전':
        state = 'BEFORE';
        break;

      case '경기종료':
        state = 'END';
        break;

      default:
        state = 'PLAYING';
        break;
    }

    teamService.findOneByName(name, function (team) {
      gameService.findOneByDateAndTeam(new Date(), team, function (game) {
        game.state = state;
        gameService.save(game);
      });
    });

  });
});

crawler.on('crawlstart', function () {
  console.log('crawl start');
});

crawler.on("complete",function() {
  console.log('complete');
});

function parseTeam($) {
  var teams = [];
  $('p.leftTeam').each(function (i, element) {
    teams.push(element);
  });
  $('p.rightTeam').each(function (i, element) {
    teams.push(element);
  });

  return teams;
}

module.exports = crawler;