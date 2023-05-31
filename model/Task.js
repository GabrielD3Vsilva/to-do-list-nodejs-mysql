const db = require('../database/db');

const Tasks = db.sequelize.define('tarefa', {
    name: db.Sequelize.STRING
});

// Tasks.sync({force: true});
module.exports = Tasks

