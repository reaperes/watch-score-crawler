var Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('team', {
    id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      length: 10
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
};