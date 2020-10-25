const mongoose=require("mongoose");

const user_schema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    email:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    }
});



const User=mongoose.model("User",user_schema);
module.exports=User;