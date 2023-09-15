
//require userDataModel
const UserDataModel=require("../../models/userDataModel/UserDataModel")

//createUser

const createUser=async(req,res)=>{
    const{fname,lname,email,phone,country,language,timeZone,currency,bio,gender,comm}=req.body;

    try {

        const addUser= await UserDataModel.create({fname,lname,email,phone,country,language,timeZone,currency,bio,gender,comm})

        res.status(200).json(addUser)

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={createUser}