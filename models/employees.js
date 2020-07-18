const orm = require('../config/orm');

class Employees {

    selectAll() {
        return orm.selectAll('employee')
    }

    viewAllEmployees(){
        return orm.viewAllEmployees()
    }

    addEmployee() {
        return orm.create('employee', ['first_name', 'last_name', 'role_id', 'manager_id'], values)
    }

    removeEmployee() {
        return orm.delete('employee', 'last_name', value)
    }
}





module.exports = new Employees();