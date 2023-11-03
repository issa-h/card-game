const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

let Card = sequelize.define("Card", {
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgURL: DataTypes.STRING
})

module.exports = Card;