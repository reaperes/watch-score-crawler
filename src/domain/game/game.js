var Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('game', {
    id: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    },
    home: {
      type: Sequelize.INTEGER,
      model: 'team',
      key: 'id'
    },
    away: {
      type: Sequelize.INTEGER,
      model: 'team',
      key: 'id'
    },
    state: {
      type: Sequelize.ENUM('BEFORE', 'PLAYING', 'END')
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
};