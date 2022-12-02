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

const getTablesBySize = async (req, res, next) => {
	try {
		const data = (await sql.query`SELECT * FROM layout WHERE size = ${req.params.num}`).recordset;
		if(Array.isArray(data) && data.length === 0)
			res.status(404).send('Not Found');
		else
			res.json(await data);
			
	} catch (error) {
		next(error);
	}
};

module.exports = {
  getTables,
  getTablesBySize
};
