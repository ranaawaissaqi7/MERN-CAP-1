
//require userPaymentModel
const UserPaymentMethodModel=require("../../models/userPaymentMethodModel/UserPaymentMethodModel")

//createPaymentMethod

const createPaymentMethod=async(req,res)=>{
    const{cardName,cardNo,expiryDate,cvvCode}=req.body;

    try {

        const addPaymentMethod= await UserPaymentMethodModel.create({cardName,cardNo,expiryDate,cvvCode})

        res.status(200).json(addPaymentMethod)

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={createPaymentMethod}