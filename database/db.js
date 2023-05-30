const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', '1981abcd.', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
};