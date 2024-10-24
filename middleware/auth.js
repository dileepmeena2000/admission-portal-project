const jwt = require("jsonwebtoken");

const checkAuth = (req, res ,next) => {
//   console.log("hello auth");

const {token} = req.cookies
// console.log(token)
if(!token){
    req.flash('error','Unauthorised user please Login')
    res.redirect('/')
}else{
    const verifyToken = jwt.verify(token , 'dileepmeena1234')
    // console.log(verifyToken)
  next() // next method router pr paucha dega
}


};

module.exports = checkAuth;
