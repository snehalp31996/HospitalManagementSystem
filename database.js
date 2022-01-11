/**
 * @author Snehal Patil
 * @date 12/08/2021
 * @since  0.0.1
 */
var mysql = require('mysql2');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'krp007kishan',      // Replace with your database password
  database: 'hospitalManagementSystem' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;