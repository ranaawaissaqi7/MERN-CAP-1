const mongoose =require("mongoose");

const userPaymentMethodSchema=mongoose.Schema({
    cardName:{
        type:String,
        required:true
    },
    cardNo:{
        type:Number,
        required:true
    },
    expiryDate:{
        type:String,
        required:true
    },
    cvvCode:{
        type:Number,
        required:true
    },
},{timestamps:true})

const UserPaymentMethodModel=mongoose.model("userPaymentMethod",userPaymentMethodSchema)

module.exports=UserPaymentMethodModel