const express = require("express")
const bodyParser = require('body-parser')
const courseRouter = require('./Routes/coursing.routes')
const mongoose = require('mongoose')
require("dotenv").config()


const app = express()

// Middleware for validation
app.use(bodyParser.json())
// Routing  
app.use('/api/v1/courses' , courseRouter)

// Db Connection 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Error connecting to DB:", error));


// Sever listening
app.listen(process.env.PORT , () => {
    console.log(`server is Running ...`)
})