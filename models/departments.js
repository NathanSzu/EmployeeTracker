const orm = require('../config/orm');

class Departments {

    selectAll() {
        return orm.selectAll('department')
    }
}





module.exports = new Departments();