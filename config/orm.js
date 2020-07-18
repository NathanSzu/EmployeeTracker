// Imports the database connection.
const connection = require("../config/connection.js");

// Object Relational Mapping to store all SQL functions.
class ORM {
    constructor(connection){
        this.connection = connection;
    }

    printQuestionMarks(numberOfValuesOrColumns, type){
        const questionMarks = [];
    
        for (var i = 0; i < numberOfValuesOrColumns; i++) {
          if(type === 'cols'){
            questionMarks.push("??");
          } else {
            questionMarks.push("?")
          } 
        }
        return questionMarks.join(', ');
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

    tripleJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol, tableThree, tableTwoCol2, tableThreeCol) {
        const queryString = `SELECT ${colsToSelect.join(', ')} FROM ((?? INNER JOIN ?? ON ?? = ??) INNER JOIN ?? ON ?? = ??)`;
    
        return this.connection.query(
          queryString, [tableOne, tableTwo, tableOneCol, tableTwoCol, tableThree, tableTwoCol2, tableThreeCol]
          );
      }

    create(table, columns, values) {
        const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;

        return this.connection.query(queryString, [table, ...values])
    }

    createSingle(value) {
        const queryString = `INSERT INTO department (department) VALUES (?)`;

        return this.connection.query(queryString, value)
    }

    delete(table, cols, value){
        const queryString = 'DELETE FROM ?? WHERE ??=?';

        return this.connection.query(queryString, [table, cols, value])
    }

    update(value){
        const queryString = `UPDATE employee SET role_id = ? WHERE employee.id = ?`

        return this.connection.query(queryString, [...value])
    }
}



// Exports the ORM object for use in the models directory.
module.exports = new ORM(connection);