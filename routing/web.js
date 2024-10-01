const express = require("express");
const FrontController = require("../controllers/FrontController");
const AdminController = require("../controllers/admin/AdminController");
const route = express.Router();

route.get("/home", FrontController.home);
route.get("/about", FrontController.about);
route.get("/", FrontController.login);
route.get("/register", FrontController.register);
route.get("/contact", FrontController.contact);

//// insert data
route.post("/insertStudent", FrontController.insertStudent);

//adminController
route.get("/admin/dashboard", AdminController.dashboard);
route.get("/admin/studentDisplay", AdminController.displayStudent);
route.get("/admin/deleteStudent/:id", AdminController.deleteStudent);

module.exports = route;
