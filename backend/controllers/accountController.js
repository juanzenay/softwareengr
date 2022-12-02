var http = require('http');
var sql = require('mssql');
var fs = require('fs');

const getAccounts = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM accounts`).recordset;
		res.json(await data);
	} catch(error) {
		next(error);
	}
};

const createAccount = async (req, res, next) => {
	try {
		const data = (await sql.query`INSERT INTO accounts (username, email, password) \
		OUTPUT INSERTED.* VALUES \
		(${req.body.username}, ${req.body.email}, ${req.body.password})`).recordset[0];
		res.json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = {
  getAccounts,
  createAccount
};
