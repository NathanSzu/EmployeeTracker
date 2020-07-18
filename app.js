const departments = require("./models/departments.js");
const employees = require("./models/employees.js");
const roles = require("./models/roles.js");
const inquirer = require("inquirer");
const inquireMapper = require("./models/inquireMapper");


employees.viewAllEmployees()
    .then(results => console.table(results))
    .catch(err => console.log(err))
    .then(function(){
        appLoop()
    })

    function appLoop(){
        inquirer
        .prompt([
            {
            type: "list",
            message: "What do you want to do?",
            choices: ['View departments.', 'View roles.', 'Create department.', 'Create role.', 'Create employee.', 'Update employee role.', 'Close program.'],
            name: "next"
            }
        ])
        .then(function(response) {
            if (response.next === 'View departments.') {
                departments.selectAll()
                .then(results => console.table(results))
                .catch(err => console.log(err))
                .then(function(){
                    appLoop()
                })
            }

            else if (response.next === 'View roles.') {
                roles.selectAll()
                .then(results => console.table(results))
                .catch(err => console.log(err))
                .then(function(){
                    appLoop()
                })
               
            }

            else if (response.next === 'Create department.') {
                departments.selectAll()
                .then(function(results) {
                    console.table(results)
                    inquireMapper.createDepartment()
                })
                .catch(err => console.log(err))
            }

            else if (response.next === 'Create role.') {
                roles.selectAll()
                .then(function(results) {
                    console.table(results)
                    inquireMapper.createRole()
                })
                .catch(err => console.log(err))
            }
            
            else if (response.next === 'Create employee.') {
                employees.selectAll()
                .then(function(results) {
                    console.table(results)
                    inquireMapper.createEmployee()
                })
                .catch(err => console.log(err))
                
            }
            
            else if (response.next === 'Update employee role.') {
                employees.selectAll()
                .then(function(results) {
                    console.table(results)
                    inquireMapper.alterEmployee()
                })
                .catch(err => console.log(err))
            }
            
            else if (response.next === 'Close program.') {
                process.exit()           
            }
            
            else {
                console.log('ERROR');
                process.exit()
            } 
            
    })
    
}
