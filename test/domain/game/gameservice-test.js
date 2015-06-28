var expect = require("chai").expect;
var Sequelize = require('sequelize');
var sequelize = new Sequelize('watch_score', 'root', '');
var Team = require("../../../src/domain/team/team")(sequelize);
var Game = require("../../../src/domain/game/game")(sequelize);
var gameService = require("../../../src/domain/game/gameservice")(sequelize);

//describe("gameService", function(){
  var startDate = new Date();
  var endDate = new Date();

  Game.findAll({
    where: {
      date: {
        $gt: '2015-06-28 00:00:00',
        $lt: '2015-06-29 00:00:00'
      }
    }
  }).then(function (rows) {
    console.error(rows[0]);
  });

  //console.log(startDate.toString());

  //describe("#parse()", function(){
  //  it("should parse long formed tags", function(){
  //    var args = ["--depth=4", "--hello=world"];
  //    var results = tags.parse(args);
  //
  //    expect(results).to.have.a.property("depth", 4);
  //    expect(results).to.have.a.property("hello", "world");
  //  });
  //});
//});