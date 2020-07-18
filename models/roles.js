const orm = require('../config/orm');

class Roles {

    selectAll() {
        return orm.selectAll('role')
    }

    addRole(values) {
        return orm.create('role', ['title', 'salary', 'department_id'], values)
    }

    removeRole(value) {
        return orm.delete('role', 'title', value)
    }
}





module.exports = new Roles();