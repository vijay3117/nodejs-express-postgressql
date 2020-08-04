const dbConfig = require("../../config/db.config.json")['development'];
const Sequelize = require("sequelize");
const path = require('path');
const fs = require('fs');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false
});

const db = {};

fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db;

