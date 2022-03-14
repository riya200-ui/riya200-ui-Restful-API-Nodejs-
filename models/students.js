const mongoose = require("mongoose");
const validator = require("validator");
//create instance
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email id already present"],
            //validate for check email is right format or not
            //dont need to write format in isEmail
        validate(value){
               
               //if(validator.isEmail("valid Email"))
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
       // max:10,
        required:true,
        unique:true
    },
    address: {
        type:String,
        required:true
    }

})
//we will create new collection in model singular
const Student = new mongoose.model('Student', studentSchema);
//export 
module.exports = Student;