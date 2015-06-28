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
      references: 'team',
      referencesKey: 'id'
    },
    away: {
      type: Sequelize.INTEGER,
      references: 'team',
      referencesKey: 'id'
    },
    state: {
      type: Sequelize.ENUM('BEFORE', 'PLAYING', 'END')
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
};