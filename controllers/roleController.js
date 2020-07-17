const express = require('express');
const router = express.Router();

// Importing file from our models directory.
const roles = require("../models/roles");

router.get("/api/role", (req, res) => {
    roles.selectAll()
    // .then(results => res.json(results))
    .then(results => console.table(results))
    .then(res.json('Table loaded!'))
    .catch(err => res.json(err))
  });


// Exports routes for server.js to use.
module.exports = router;