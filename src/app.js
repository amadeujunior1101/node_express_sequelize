const express = require("express");
const app = express();

const index = require("./routes/index");
const employeeRoute = require("./routes/employeeRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", index);
app.use("/employees", employeeRoute);

module.exports = app;
