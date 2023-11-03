const { DataTypes } = require("sequelize");

// create your User model here
let User = db.define('User', {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING
})