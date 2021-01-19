# EmployeesAPI

* ```POST http://localhost:3000/api/employees```
* ```GET http://localhost:3000/api/employees```
* ```GET http://localhost:3000/api/employees/:id```
* ```PUT http://localhost:3000/api/employees/:id```
* ```DELETE http://localhost:3000/api/employees/:id```

### POST example

The request body application/json:

```json
{
    "id": "303989777",
    "first_name": "Marajin",
    "last_name": "Banana",
    "mobile_phone": "03-9698867",
    "home_phone": "03-9698867",
    "email": "worker3@gmail.com",
    "date_of_birth": "01-01-1990",
    "employee_country": "Israel",
    "employee_city": "Tel-Aviv",
    "employee_street": "Rothschild",
    "employee_status": "Active",
    "join_date": "01-06-2017",
    "employee_type": "Regular",
    "job_code": "10061",
    "job_name": "Waiter",
    "role": "General",
    "branch_country": "Israel",
    "branch_city": "Tel-Aviv",
    "branch_street": "Ibn Gvirol",
    "branch_number": "1"
}
```
Then:
* ```POST http://localhost:3000/api/employees```
