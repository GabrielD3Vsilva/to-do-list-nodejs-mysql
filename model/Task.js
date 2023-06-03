const db = require('../database/db');

const Tasks = db.sequelize.define('tarefa', {
    name: db.Sequelize.STRING
});

module.exports = Tasks