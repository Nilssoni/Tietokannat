const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user',
  password: 'test',
  database: 'netdb'
  //database:'test_db'
});
module.exports = connection;