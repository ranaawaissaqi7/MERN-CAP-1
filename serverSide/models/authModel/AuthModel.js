const mongoose =require("mongoose");

const userAuthScehma=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
},{timestamps:true})

const UserAuthModel=mongoose.model("userAuth",userAuthScehma)

module.exports=UserAuthModel