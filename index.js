const express = require('express');
const app = express( );
// const connectToDb = require('./database/db');
const ejs = require('ejs');
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json( ));
app.use(express.urlencoded( ));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// connectToDb( );

app.listen(3000, ( ) => console.log('server loading'));