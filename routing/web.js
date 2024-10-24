const express = require("express");
const FrontController = require("../controllers/FrontController");
const AdminController = require("../controllers/admin/AdminController");
const route = express.Router();
const checkAuth = require('../middleware/auth')

route.get("/home",checkAuth, FrontController.home);
route.get("/about", checkAuth,FrontController.about);
route.get("/", FrontController.login);
route.get("/register", FrontController.register);
route.get("/contact", checkAuth,FrontController.contact);


//// insert data
route.post("/insertStudent", FrontController.insertStudent);
route.post("/verifyLogin", FrontController.verifyLogin);
route.get("/Logout", FrontController.Logout);


//adminController
route.get("/admin/dashboard", AdminController.dashboard);
route.get("/admin/displayStudent", AdminController.displayStudent);
route.get("/admin/deletestudent/:id", AdminController.deletestudent);
route.get("/admin/viewstudent/:id", AdminController.viewstudent);
route.get("/admin/editstudent/:id", AdminController.editstudent);

route.post("/admin/studentUpdate/:id", AdminController.studentUpdate);
route.post("/admin/insertStudent", AdminController.StudentInsert);




module.exports = route;
