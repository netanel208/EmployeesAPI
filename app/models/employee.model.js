/**
 * This file can be replaced with a database model file.
 * 
 * 
 * Assumptions:
 * 
 * It is assumed that these are the data that represent each employee in the restaurant, but this may not be the case and there is additional data.
 */

/**
 * 
 * @param {String} id - id number
 * @param {String} first_name - first name
 * @param {String} last_name - last name
 * @param {String} mobile_phone - mobile phone number
 * @param {String} home_phone - home phone number
 * @param {String} email - email address
 * @param {String} date_of_birth - date of birth
 * @param {String} employee_country - current employee country
 * @param {String} employee_city - current employee city
 * @param {String} employee_street - current employee street
 * @param {String} employee_status - activity status
 * @param {String} join_date - join date
 * @param {String} employee_type - employee type
 * @param {String} role - role
 * @param {String} job_code - job code
 * @param {String} job_name - job name
 * @param {String} branch_country - country of restaurant branch
 * @param {String} branch_city - city of restaurant branch
 * @param {String} branch_street - street of restaurant branch
 * @param {String} branch_number - restaurant branch number
 */
function Employee(id, first_name, last_name, mobile_phone, home_phone, email, date_of_birth, employee_country, employee_city, employee_street, employee_status, join_date, employee_type, role, job_code, job_name, branch_country, branch_city, branch_street, branch_number) {
    this.id = id;
    this.first_name = first_name || '';
    this.last_name = last_name || '';
    this.mobile_phone = mobile_phone || '';
    this.home_phone = home_phone || '';
    this.email = email || '';
    this.date_of_birth = date_of_birth || '';
    this.employee_country = employee_country || '';
    this.employee_city = employee_city || '';
    this.employee_street = employee_street || '';
    this.employee_status = employee_status || '';
    this.join_date = join_date || '';
    this.employee_type = employee_type || '';
    this.role = role || '';
    this.job_code = job_code || '';
    this.job_name = job_name || '';
    this.branch_country = branch_country || '';
    this.branch_city = branch_city || '';
    this.branch_street = branch_street || '';
    this.branch_number = branch_number || '';
};


module.exports = Employee;