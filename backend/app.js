var express = require('express');
var path = require('path');
var logger = require('morgan');
var sql = require('mssql');
var session = require('express-session');
var http = require('http');
var sql = require('mssql');
var http = require('http');
var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountsRouter = require('./routes/accounts');
var reservationsRouter = require('./routes/reservations');
var layoutRouter = require('./routes/layout');
var sessionHandler = require('./routes/session');

var app = express();

const cors=require("cors");
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            
   optionSuccessStatus:200,
}

const dbConfig = {
	user: 'a123',
	password: 'password01234%',
	server: 'softwareeng.database.windows.net',
	database: 'Reservation'
};

sql.connect(dbConfig, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    else
        console.log("Successfuly connected");
});

app.use(cors(corsOptions)) 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/session', sessionHandler);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/accounts', accountsRouter);
app.use('/reservations', reservationsRouter);
app.use('/layout', layoutRouter);

module.exports = app;
