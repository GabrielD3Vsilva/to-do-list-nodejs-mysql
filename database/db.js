const Sequelize = require('sequelize');

const connectToDb = new Sequelize('nodejs', 'root', '1981abcd.', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connectToDb;