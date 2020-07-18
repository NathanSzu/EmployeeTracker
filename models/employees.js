const orm = require('../config/orm');

class Employees {

    selectAll() {
        return orm.selectAll('employee')
    }

    viewAllEmployees(){
        return orm.viewAllEmployees()
    }

    addEmployee(values) {
        return orm.create('employee', ['first_name', 'last_name', 'role_id'], values)
    }

    removeEmployee(value) {
        return orm.delete('employee', 'last_name', value)
    }

    alterEmployee(value) {
        return orm.update(value)
    }
}





module.exports = new Employees();