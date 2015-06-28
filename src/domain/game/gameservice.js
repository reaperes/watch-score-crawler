module.exports = function (sequelize) {
  var Game = require('./game')(sequelize);

  return {
    /**
     * @param callback
     */
    findAll: function (callback) {
      Game.findAll().then(callback);
    },

    /**
     * @param date
     * @param team {Team} instance
     * @param callback
     */
    findOneByDateAndTeam: function (date, team, callback) {
      var startDate = new Date(date.getYear(), date.getMonth(), date.getDay(), 0, 0, 0, 0);
      var endDate = new Date(startDate + 24 * 60 * 60 * 1000 - 1);

      Game.findAll({
        where: {
          date: {
            $lt: startDate,
            $gt: endDate
          },
          $or: [
            {home: team.id},
            {away: team.id}
          ]
        }
      }).then(function (rows) {
        callback(rows[0]);
      });

    }
  }
};