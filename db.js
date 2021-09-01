const { Sequelize } = require("sequelize/types");

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

modules.export = {
    sequelize
}