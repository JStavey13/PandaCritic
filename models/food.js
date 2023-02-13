const sequelize = require('../config/connections')
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
            allowNull: false,
        }

    },

    {
        sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'food'
    }
)



model.exports = Food