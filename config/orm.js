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

    viewAllEmployees() {
        const queryString = `SELECT first_name, last_name, title, salary, department
        FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id`
        return this.connection.query(queryString)
    }
}



// Exports the ORM object for use in the models directory.
module.exports = new ORM(connection);