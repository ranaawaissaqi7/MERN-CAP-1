

//require userAuthModel
const UserAuthModel=require("../../models/authModel/AuthModel")

//userSignUp

const userSignUp=async(req,res)=>{
    const{name,email,password,cpassword}=req.body;

    try {

        const addUser= await UserAuthModel.create({name,email,password,cpassword})

        res.status(200).json(addUser)

    } catch (error) {
        res.status(400).json(error)
    }
}

//loginUser

const loginUser=async(req,res)=>{
    const{email,password}=req.body;

    try {

        const findUser=await UserAuthModel.findOne({email:email})

        if (findUser) {
            if (findUser.email===email && findUser.password===password) {
                res.status(200).json(" login Successfully Done !")
            } else {
                res.status(200).json(" invalid User !")
            }
        } else {
            res.status(200).json(" User Not Found Please SignUp  !")
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={userSignUp,loginUser}