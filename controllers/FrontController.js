const UserModel = require("../models/user");

const TeacherModel = require("../models/teacher");

const bcrypt = require('bcrypt');

class FrontController {
  static home = async (req, res) => {
    try {
      res.render("home"); // home.ejs file
    } catch (error) {
      console.log(error);
    }
  };

  static about = async (req, res) => {
    try {
      res.render("about");
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    try {
      res.render("login" ,{ message: req.flash("success") });
    } catch (error) {
      console.log(error);
    }
  };

  static register = async (req, res) => {
    try {
      res.render("register", { message: req.flash("error") });
    } catch (error) {
      console.log(error);
    }
  };

  static contact = async (req, res) => {
    try {
      res.render("contact");
    } catch (error) {
      console.log(error);
    }
  };

  //// insert data

  static insertStudent = async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;

      if (!name || !email || !password || !confirmpassword) {
        req.flash("error", "All Fields are Required.");
        return res.redirect("/register");
      }

      const isEmail = await UserModel.findOne({ email });
      if (isEmail) {
        req.flash("error", "Email Already Exists.");

        return res.redirect("/register");
      }

      if (password != confirmpassword) {
        req.flash("error", "password does not match.");
        return res.redirect("/register");
      }

      console.log(req.files)

      // const hashPassword = await bcrypt.hash(password,10)
      // const data = await UserModel.create({
      //   name,
      //   email,
      //   password:hashPassword
      // });
      // req.flash("success", "Register Success  !Plz Login");
      // res.redirect("/"); /// route ** web
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = FrontController;
