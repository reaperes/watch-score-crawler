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
      }).then(function (rows) {
          callback(rows[0]);
      });
    },

    findOneByName: function (name, callback) {
      Team.findAll({
        where: {
          name: name
        }
      }).then(function (rows) {
        callback(rows[0]);
      });
    }
  }
};