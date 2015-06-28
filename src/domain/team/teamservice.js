module.exports = function (sequelize) {
  var Team = require('./team')(sequelize);

  return {
    /**
     * @param callback
     */
    findAll: function (callback) {
      Team.findAll().then(callback);
    },

    findOne: function (id, callback) {
      Team.findAll({
        where: {
          id: id
        }
      }).then(function (teams) {
          callback(teams[0]);
      });
    }
  }
};