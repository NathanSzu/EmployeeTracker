const orm = require('../config/orm');

class Employees {

    selectAll() {
        return orm.selectAll('employee')
    }
    viewAllEmployees(){
        return orm.viewAllEmployees()
    }
}





module.exports = new Employees();