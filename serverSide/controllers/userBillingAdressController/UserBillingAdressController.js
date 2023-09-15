
//require userBillingAdressModel
const UserBillingAdressModel=require("../../models/userBillingAdressModel/UserBillingAdressModel")

//createBillingAdress

const createBillingAdress=async(req,res)=>{
    const{country,city,state,adress1,adress2,postCode}=req.body;

    try {

        const addAdress= await UserBillingAdressModel.create({country,city,state,adress1,adress2,postCode})

        res.status(200).json(addAdress)

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={createBillingAdress}