var http = require('http');
var sql = require('mssql');
var fs = require('fs');
var session = require('express-session');

const getAccounts = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM accounts`).recordset;
		res.json(await data);
	} catch(error) {
		next(error);
	}
};

const getAccountByUsername = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM accounts WHERE username = ${req.body.username}`).recordset;
		if(Array.isArray(data) && data.length === 0)
			res.json('Username does not exist');
		else{
      if(data[0].password == req.body.password){
			  req.session.userid = data[0].userid;
        res.send(req.session);
      }else{
        res.json('Password is incorrect');
      }
    }
	} catch (error) {
		next(error);
	}
};

const createAccount = async (req, res, next) => {
	try {
    const data1 = (await sql.query`SELECT * FROM accounts WHERE username = ${req.body.username}`).recordset;
    const data2 = (await sql.query`SELECT * FROM accounts WHERE email = ${req.body.email}`).recordset;
		if((Array.isArray(data1) && data1.length === 0 )){
      if (Array.isArray(data2) && data2.length === 0){
        const insert = (await sql.query`INSERT INTO accounts (username, email, password) \
        OUTPUT INSERTED.* VALUES \
        (${req.body.username}, ${req.body.email}, ${req.body.password})`).recordset[0];
        res.json(insert);
      }else{
        res.json('Email already exists');
      }
    }else{
			res.json('Username already exists');
    }
	} catch (error) { 
		next(error);
	}
};

module.exports = {
  getAccountByUsername,
  getAccounts,
  createAccount
};
