const express = require('express');
const app = express( );
const connectToDb = require('./database/db');

connectToDb( );

app.listen(3000, ( ) => console.log('server loading'));