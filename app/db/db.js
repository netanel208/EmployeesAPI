/**
 * Assumptions:
 * 
 * There is no database so the use is in local memory.
 * employee_id represents an additional ID for the employee.
 * There is no obligation for the data in the list to be "flat", there may be more complex data depending on the database.
 * It is assumed that these are the data that represent each employee in the restaurant, but this may not be the case and there is additional data.
 * 
 */
let _employee_id = 0;
const _employees = [
    {
        "employee_id": _employee_id++,
        "id": "303445971",
        "first_name": "Moshe",
        "last_name": "Barak",
        "mobile_phone": "+972521234567",
        "home_phone": "0340404040",
        "email": "worker1@gmail.com",
        "date_of_birth": "01-01-1987",
        "employee_country": "Israel",
        "employee_city": "Tel-Aviv",
        "employee_street": "Rothschild",
        "employee_status": "Active",
        "join_date": "01-06-2012",
        "employee_type": "Regular",
        "job_code": "10061",
        "job_name": "Branch Manager",
        "role": "Manager",
        "branch_country": "Israel",
        "branch_city": "Tel-Aviv",
        "branch_street": "Ibn Gvirol",
        "branch_number": "1"
    },
    {
        "employee_id": _employee_id++,
        "id": "301445977",
        "first_name": "Sharon",
        "last_name": "Barak",
        "mobile_phone": "+972521234567",
        "home_phone": "0340404040",
        "email": "worker2@gmail.com",
        "date_of_birth": "01-09-1995",
        "employee_country": "Israel",
        "employee_city": "Tel-Aviv",
        "employee_street": "Rothschild",
        "employee_status": "Active",
        "join_date": "01-06-2012",
        "employee_type": "Regular",
        "job_code": "10062",
        "job_name": "Waiter",
        "role": "General",
        "branch_country": "Israel",
        "branch_city": "Tel-Aviv",
        "branch_street": "Ibn Gvirol",
        "branch_number": "1",
    }
];

module.exports.employees = _employees;
module.exports.employee_id = _employee_id;