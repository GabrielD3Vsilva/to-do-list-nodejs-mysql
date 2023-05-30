const routes = require('express').Router( );
const TaskController = require('../controller/TaskController');

routes.get('/home', TaskController.home);
routes.post('/create',TaskController.CreateOneTask);



module.exports = routes;