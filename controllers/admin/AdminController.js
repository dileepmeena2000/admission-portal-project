const UserModel = require("../../models/user");

class AdminController {
  static dashboard = async (req, res) => {
    try {
      res.render("admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  static displayStudent = async (req, res) => {
    try {
      const data = await UserModel.find();
        // console.log(data);

      res.render("admin/displaystudent", { d: data });
    } catch (error) {
      console.log(error);
    }
  };


  static deleteStudent = async (req, res) => {
    try {
      console.log(req.params.id)
    } catch (error) {
      console.log(error);
    }
  };


}
module.exports = AdminController;
