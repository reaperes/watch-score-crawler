var Sequelize = require('sequelize');
var sequelize = new Sequelize('watch_score', 'root', '');
var teamService = require('./domain/team/teamservice')(sequelize);
var gameService = require('./domain/game/gameservice')(sequelize);

var crawler = require('./crawler');

crawler.start();

//teamService.findAll(function (teams) {
//  console.log(teams);
//});

//gameService.findAll(function (games) {
//  console.log(games);
//});