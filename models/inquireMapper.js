const departments = require("./departments.js");
const employees = require("./employees.js");
const roles = require("./roles.js");
const orm = require('../config/orm');
const inquirer = require("inquirer");
const app = require('../app');

class InquirerMapper{

    createDepartment() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Enter department name.",
                name: "name"
            }
        ])
        .then(function(response) {
            departments.addDepartment(response.name);
            departments.selectAll()
            .then(results => console.table(results))
            .catch(err => console.log(err))
        })
    }

    createRole() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Enter role name.",
                name: "title"
            },
            {
                type: "input",
                message: "Enter salary.",
                name: "salary"
            },
            {
                type: "input",
                message: "Enter department id.",
                name: "department_id"
            }
        ])
        .then(function(response) {
            roles.addRole([response.title, response.salary, response.department_id]);
            roles.selectAll()
            .then(results => console.table(results))
            .catch(err => console.log(err))
        })
    }

    createEmployee() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Enter employee's first name.",
                name: "fname"
            },
            {
                type: "input",
                message: "Enter employee's last name.",
                name: "lname"
            },
            {
                type: "number",
                message: "Enter role id.",
                name: "role_id"
            },
        ])
        .then(function(response) {
            employees.addEmployee([response.fname, response.lname, response.role_id]);
            employees.selectAll()
            .then(results => console.table(results))
            .catch(err => console.log(err))
        })
    }

    alterEmployee() {
        inquirer
        .prompt([
            {
                type: "number",
                message: "Enter employee id.",
                name: "emp_id"
            },
            {
                type: "number",
                message: "Enter new role id.",
                name: "role_id"
            },
        ])
        .then(function(response) {
            employees.alterEmployee([response.role_id, response.emp_id]);
            employees.selectAll()
            .then(results => console.table(results))
            .catch(err => console.log(err))
        })
    }

}


module.exports = new InquirerMapper();