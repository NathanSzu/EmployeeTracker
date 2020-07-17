const orm = require('../config/orm');

class Employees {

    selectAll() {
        return orm.selectAll('employee')
    }
}





module.exports = new Employees();