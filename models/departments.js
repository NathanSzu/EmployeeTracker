const orm = require('../config/orm');

class Departments {

    selectAll() {
        return orm.selectAll('department')
    }

    addDepartment(values) {
        return orm.createSingle(values)
    }

    removeDepartment(value) {
        return orm.delete('department', 'department', value)
    }

}





module.exports = new Departments();