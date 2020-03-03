const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'myPass',
  database : 'burgers_db'
});

module.exports = connection;