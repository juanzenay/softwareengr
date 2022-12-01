var http = require('http');
var sql = require('mssql');
var fs = require('fs');

const getTables = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM layout`).recordset;
		res.json(await data);
	} catch(error) {
		next(error);
	}
};

module.exports = {getTables};
