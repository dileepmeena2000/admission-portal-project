const UserModel = require("../models/user");  

const TeacherModel = require("../models/teacher");  

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
      res.render("login");
    } catch (error) {
      console.log(error);
    }
  };

  static register = async (req, res) => {
    try {
      res.render("register");
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
    // console.log(req.body)

const { name ,email,password ,confirmpassword} = req.body

const result = new UserModel({

  name:  name,
  email : email,
  password : password

})

await result.save()
res.redirect('/')  /// route ** web


  } catch (error) {
    console.log(error);
  }
};

}
module.exports = FrontController; 
