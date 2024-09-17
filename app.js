const express= require('express')
// console.log(express)

const app = express()
const Port= 3000

const web = require('./routing/web')

const connectDB = require('./db/connectDB')

//routing

// ejs (html css)
app.set('view engine','ejs')

// css image link public
app.use(express.static('public'))



///connecting with mongoose db 
connectDB()


app.use('/',web)

// server start 
app.listen(Port,console.log("server start localhost:3000"))