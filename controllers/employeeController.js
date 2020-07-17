const express = require('express');
const router = express.Router();

// Importing file from our models directory.
const employees = require("../models/employees");

router.get("/api/employee", (req, res) => {
    employees.selectAll()
    // .then(results => res.json(results))
    .then(results => console.table(results))
    .then(res.json('Table loaded!'))
    .catch(err => res.json(err))
  });

router.get("/api/employees", (req, res) => {
    employees.viewAllEmployees()
    // .then(results => res.json(results))
    .then(results => console.table(results))
    .then(res.json('Table loaded!'))
    .catch(err => res.json(err))
});


// Exports routes for server.js to use.
module.exports = router;