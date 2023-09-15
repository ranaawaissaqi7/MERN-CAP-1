const mongoose =require("mongoose");

const userBillingAdressScehma=mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    adress1:{
        type:String,
        required:true
    },
    adress2:{
        type:String,
        required:true
    },
    postCode:{
        type:Number,
        required:true
    },
},{timestamps:true})

const UserBillingAdressModel=mongoose.model("userBillingAdress",userBillingAdressScehma)

module.exports=UserBillingAdressModel