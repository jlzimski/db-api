const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../db')



const DefineUser = (sequelize) => {
    return sequelize.define("User", {
        username: {
            type: DataTypes.STRING
        }
    })
}



module.exports = {
    DefineUser
}