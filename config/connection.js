// Set up MySQL connection.
const mysql = require("mysql");
// Set up util to allow promisify.
const util = require('util');

// Connection details.
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sokka1992!",
  database: "employeeTracker_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Allows connection.query to use promise based methods.
connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;
