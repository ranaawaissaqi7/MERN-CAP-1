const mongoose =require("mongoose");

const userDataScehma=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    timeZone:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    comm:{
        type:Boolean,
        required:true
    },
},{timestamps:true})

const UserDataModel=mongoose.model("userData",userDataScehma)

module.exports=UserDataModel