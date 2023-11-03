const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

let Attack = sequelize.define("Attack", {
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
})

module.exports = Attack