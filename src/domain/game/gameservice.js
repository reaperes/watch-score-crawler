var moment = require('moment');

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
      var startDate = moment(date).hours(0).minutes(0).seconds(0);
      var endDate = moment(startDate).add(1, 'days');

      Game.findAll({
        where: {
          date: {
            $gt: startDate.format('YYYY-MM-DD HH:mm:ss'),
            $lt: endDate.format('YYYY-MM-DD HH:mm:ss')
          },
          $or: [
            {home: team.id},
            {away: team.id}
          ]
        }
      }).then(function (rows) {
        callback(rows[0]);
      });

    },

    save: function (team) {
      team.save().catch(function (err) {
        throw err;
      });
    }
  }
};