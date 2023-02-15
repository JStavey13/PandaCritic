const sequelize = require('../config/connection')
const { Model, DataTypes }= require('sequelize')


class Food extends Model {}


Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        food_name: {
            type: DataTypes.STRING,
            allowNull: false,


        },

        food_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        food_rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        restaurant_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
              // This references the `reader` model, which we set in `Reader.js` as its `modelName` property
              model: 'user',
              key: 'id',
            },
        },

    },

    {
        sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'food'
    }
)



module.exports = Food