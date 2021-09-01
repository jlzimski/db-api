const { Sequelize } = require("sequelize/types");

const sequelize = new Sequelize(
    process.env.DB_DBNAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.export = {
    sequelize
}