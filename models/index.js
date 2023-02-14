const User = require('./User');
const Food = require('./Food');



Food.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  module.exports = { User, Food };