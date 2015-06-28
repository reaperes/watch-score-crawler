module.exports = function (sequelize) {
  var Game = require('./game')(sequelize);

  return {
    /**
     * @param callback
     */
    findAll: function (callback) {
      Game.findAll().then(callback);
    }
  }
};