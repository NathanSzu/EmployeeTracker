const orm = require('../config/orm');

class Roles {

    selectAll() {
        return orm.selectAll('role')
    }
}





module.exports = new Roles();