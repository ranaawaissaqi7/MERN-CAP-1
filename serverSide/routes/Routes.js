const express=require("express");

const router=express.Router()

//require userAuthcontrollers

const {userSignUp,loginUser}=require("../controllers/userAuthController/UserAuthController")

//signUpUser router
router.post("/signUpUser",userSignUp)

//loginUser
router.post("/loginUser",loginUser)

//require UserDataController
const {createUser}=require("../controllers/userDataController/UserDataController")

//createUser route
router.post("/createUser",createUser)

//require UserBillingAdressController
const {createBillingAdress}=require("../controllers/userBillingAdressController/UserBillingAdressController")

//createUser route
router.post("/createBillingAdress",createBillingAdress)

//require UserPaymentMethodController
const {createPaymentMethod}=require("../controllers/userPaymentMethodController/UserPaymentMethodController")

//createUser route
router.post("/createPaymentMethod",createPaymentMethod)


module.exports =router