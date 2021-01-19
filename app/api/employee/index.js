'use strict';
var express = require('express');
var controller = require('./employee.controller');

var router = express.Router();

/**
 *  Routes of base path: /api/employees
 */
router.post('/', controller.createEmployee);
//-----------------------------------------------
router.get('/', controller.getAllEmployees);
router.get('/:id', controller.getEmployeeById);
//-----------------------------------------------
router.put('/:id', controller.updateEmployee);
//-----------------------------------------------
router.delete('/:id', controller.deleteEmployee);

module.exports = router;