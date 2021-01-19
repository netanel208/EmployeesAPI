/**
 * Assumptions:
 * 
 * Assumption in the "create" function These are the data necessary to create an Employee object. There may be other data necessary to create an object.
 * No Promise was used even though it could have been used.
 * 
 */
const db = require('../db/db');
const Employee = require('../models/employee.model')

/**
 * Create and save new employee
 * 
 * @param {Employee} data
 */
exports.create = function(data){
    // Necessary fields
    if(!data.id || !data.first_name || !data.last_name || !data.mobile_phone){
        return null;
    } else {
        if(db.employees){
            // Create and save employee
            let employee = new Employee(data.id, data.first_name, data.last_name, data.mobile_phone, data.home_phone, data.email, data.date_of_birth, data.employee_country, data.employee_city, data.employee_street, data.employee_status, data.join_date, data.employee_type, data.role, data.job_code, data.job_name, data.branch_country, data.branch_city, data.branch_street, data.branch_number);
            employee.employee_id = db.employee_id++;
            db.employees.push(employee);
            return employee;
        } else {
            return null;
        }
    }
};

/**
 * Find and return all employees
 */
exports.find = function() {
    if(db.employees){
        return db.employees;
    }
    return null;
};

/**
 * Find a single employee by id
 * 
 * @param {*} id 
 */
exports.findById = function(id) {
    if(db.employees){
        let employee = db.employees.find(e => e.id === id);
        return employee;
    }
    return null;
};

/**
 * Update a single employee by id with data
 * 
 * @param {*} id 
 * @param {Employee} data 
 */
exports.update = function(id, data){
    if(db.employees){
        // Unable to update employee id
        if(Object.keys(data).includes("id")){
            return null;
        } else {
            // Find and update employee
            let employeeIndex = db.employees.findIndex(e => e.id === id);
            for (let key of Object.keys(data)) {
                db.employees[employeeIndex][key] = data[key];
            }
            return db.employees[employeeIndex];
        }
    }
    return null;
}

/**
 * Delete a single employee by id
 * 
 * @param {*} id 
 */
exports.delete = function(id){
    if(db.employees){
        let employeeIndex = db.employees.findIndex(e => e.id === id);
        return db.employees.splice(employeeIndex, 1);
    }
    return null;
}
