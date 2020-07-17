// Imports the database connection.
const connection = require("../config/connection.js");

// Object Relational Mapping to store all SQL functions.
class ORM {
    constructor(connection){
        this.connection = connection;
    }

    selectAll(table) {
        const queryString = `SELECT * FROM ??`;
        return this.connection.query(queryString, [table])
    }
}



// Exports the ORM object for use in the models directory.
module.exports = new ORM(connection);