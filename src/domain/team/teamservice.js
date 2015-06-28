module.exports = function (sequelize) {
  var Team = require('./team')(sequelize);

  return {
    /**
     * @param callback
     */
    findAll: function (callback) {
      Team.findAll().then(callback);
    }
  }
};