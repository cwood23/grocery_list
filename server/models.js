import { DataTypes } from 'sequelize';
import sequelize from "./db.js";

export const Item = sequelize.define(
    'Item',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
    sequelize,
    timestamps: false,
    modelName: 'Item'
});

export const Recipe = sequelize.define(
    'Recipe',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    sequelize,
    timestamps: false,
    modelName: 'Recipe'
});

Item.belongsToMany(Recipe, { through: 'RecipeItems', timestamps: false });
Recipe.belongsToMany(Item, { through: 'RecipeItems', timestamps: false });