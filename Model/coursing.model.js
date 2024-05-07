const mongoose = require('mongoose')
const Courses = mongoose.Schema({
    title : {
        type : String , 
        required : true

    },
    description : {
       type : String  ,
       required: true 

    },
    lectures : {
        type : Number , 
        required: true 
    },
    active:{
        type : Boolean
    }

})

module.exports = mongoose.model("courses" , Courses )