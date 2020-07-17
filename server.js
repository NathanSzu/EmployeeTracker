const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
const apiDepartmentRoutes = require("./controllers/departmentController");
const apiEmployeeRoutes = require("./controllers/employeeController");
const apiRoleRoutes = require("./controllers/roleController");

app.use(apiDepartmentRoutes);
app.use(apiEmployeeRoutes);
app.use(apiRoleRoutes);

// Opens the server to listen on PORT imported from line 3.
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
