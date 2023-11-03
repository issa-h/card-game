const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

let Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
})

module.exports = Deck;