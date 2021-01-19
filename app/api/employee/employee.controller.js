/**
 * Assumptions:
 * There is no database so the use is in local memory.
 * There are usage to responses statuses.
 * Use of synchronous functions - Asynchronous functions can be used.
 * No Promise was used even though it could have been used.
 * 
 */
const response_writer = require('../../common/common');
const Employee = require('../../services/employee.service');

/**
 * Create and save new employee. 
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createEmployee = function(req, res){
    try {
        // Check if there is a request body
        if(!req.body) {
            res.status(400).send(response_writer.send_response(null, true, 'Request body can not be empty'));
        } else {
            // Check if there is an id in request body
            if(!req.body.id){
                res.status(400).send(response_writer.send_response(null, true, 'Request body must contain employee id number'));
            } else {
                // Check if an employee already exists
                const employeeFound = Employee.findById(req.body.id);
                if(employeeFound){
                    res.status(409).send(response_writer.send_response(null, true, 'Employee already exists'));
                } else {
                    // Create and save new employee
                    const employeeCreated = Employee.create(req.body);
                    if(!employeeCreated){
                        res.status(400).send(response_writer.send_response(null, true, 'Missing or incorrect fields in the body of the request'));
                    } else {
                        res.status(201).send(response_writer.send_response(employeeCreated, false, 'Employee created successfully'));
                    }
                }
            }
        }
    } catch (error) {
        res.status(500).send(response_writer.send_response(null, true, error.message || "Some error occurred while creating employee"));
    }
}

/**
 * Find all employees
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getAllEmployees = function(req, res){
    try {
        const employees = Employee.find();
        if(!employees){
            res.status(500).send(response_writer.send_response(null, true, 'Some error occurred while retrieving employees'));
        } else {
            res.send(response_writer.send_response(employees, false, 'Success'));
        }
    } catch (error) {
        res.status(500).send(response_writer.send_response(null, true, error.message || "Some error occurred while getting all employees"));
    }
}

/**
 * Find a single employee by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getEmployeeById = function(req, res){
    try {
        const id = req.params.id;
        const employee = Employee.findById(id);
        if(!employee){
            res.status(404).send(response_writer.send_response(null, true, `Employee not found with id ${req.params.id}`));
        } else {
            res.send(response_writer.send_response(employee, false, 'Success'));
        }
    } catch (error) {
        res.status(500).send(response_writer.send_response(null, true, error.message || `Some error occurred while getting employee with id ${req.params.id}`));
    }
}

/**
 * Update a single employee by id with data
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.updateEmployee = function(req, res){
    try {
        // Check if there is a request body
        if(!req.body) {
            res.status(400).send(response_writer.send_response(null, true, 'Request body can not be empty'));
        } else {
            // Check if an employee exists
            const employeeFound = Employee.findById(req.params.id);
            if(!employeeFound){
                res.status(404).send(response_writer.send_response(null, true, `Employee not found with id ${req.params.id}`))
            } else {
                // Update employee by id with data
                const employeeUpdated = Employee.update(req.params.id, req.body);
                if(!employeeUpdated){
                    res.status(400).send(response_writer.send_response(null, true, 'Missing or incorrect fields in the body of the request'));
                } else {
                    res.send(response_writer.send_response(employeeUpdated, false, 'Employee updated successfully'));
                }
            }
        }
    } catch (error) {
        res.status(500).send(response_writer.send_response(null, true, error.message || `Some error occurred while updating employee with id ${req.params.id}`));
    }
}

/**
 * Delete a single employee by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteEmployee = function(req, res){
    try {
        // Check if an employee exists
        const employeeFound = Employee.findById(req.params.id);
        if(!employeeFound){
            res.status(404).send(response_writer.send_response(null, true, `Employee not found with id ${req.params.id}`))
        } else {
            // Delete employee by id
            const employeeDeleted = Employee.delete(req.params.id);
            if(!employeeDeleted){
                res.status(500).send(response_writer.send_response(null, true, `Could not delete employee with id ${req.params.id}`));
            } else {
                res.send(response_writer.send_response(null, false, 'Employee deleted successfully'));
            }
        }
    } catch (error) {
        res.status(500).send(response_writer.send_response(null, true, error.message || `Some error occurred while deleting employee with id ${req.params.id}`));
    }
}