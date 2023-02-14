const sequelize = require('../config/connection');
const Food = require('../models/Food');
const foodData = require('./food-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Food.bulkCreate(foodData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();