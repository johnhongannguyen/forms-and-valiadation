const mysql = require("mysql");

// create a pool of connection. This is a way to manage connections to our database.

exports.connectionPool = mysql.createPool({
    host:'localhost', 
    user:'root',
    password:'',
    database:'demo',
    multipleStaments: true, 
    connectionLimit:100
    
});