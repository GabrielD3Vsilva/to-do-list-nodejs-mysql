const connectToDb = require('../database/db');
const Sequelize = require('sequelize');

const Tasks = new connectToDb.define('tarefas', {
    name: Sequelize.STRING
});

module.exports = Tasks;

