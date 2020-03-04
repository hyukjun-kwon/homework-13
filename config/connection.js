const mysql = require('mysql');

// db connection
let connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createPool(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'myPass',
    connectionLimit: 20,
    database : 'burgers_db'
  });
}

module.exports = connection;