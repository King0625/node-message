const mysql = require('mysql2');
const { dbConfig } = require('../config');
// create the connection to database
const connection = mysql.createConnection(dbConfig);

module.exports = {
  connection
};