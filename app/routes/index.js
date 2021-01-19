/**
 * Create base api path for different scopes of actions, for example: /api/Suppliers.
 * 
 * @param {Express} app 
 */
module.exports = (app) => {
    app.use('/api/employees', require('../api/employee'));

};