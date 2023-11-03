const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

// create your User model here
let User = sequelize.define('User', {
    username: DataTypes.STRING
})

module.exports = User;