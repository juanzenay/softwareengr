var http = require('http');
var sql = require('mssql');
var fs = require('fs');
var session = require('express-session');

const getUsers = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM users`).recordset;
		res.json(await data);
	} catch(error) {
		next(error);
	}
};

const createUser = async (req, res, next) => {
    try{
        const insert = (await sql.query`INSERT INTO users (userid, name, address, phone) \
        OUTPUT INSERTED.* VALUES \
        (${req.body.userid},${req.body.name}, ${req.body.address}, ${req.body.phone})`).recordset[0];
        res.json(insert);
    } catch (error) { 
		next(error);
	}
};

module.exports = {
	getUsers,
	createUser
};
