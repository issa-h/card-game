const { DataTypes } = require("sequelize");

let Deck = db.define('Deck', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
})