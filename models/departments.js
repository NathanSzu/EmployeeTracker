const orm = require('../config/orm');

class Departments {

    selectAll() {
        return orm.selectAll('department')
    }

    addDepartment() {
        return orm.create('department', 'department', values)
    }

    removeDepartment() {
        return orm.delete('department', 'department', value)
    }
}





module.exports = new Departments();