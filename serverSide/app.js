require("dotenv").config

const express=require("express");
const app=express();

const mongoose=require("mongoose")

const cors=require("cors")

const port=process.env.PORT || 8000

app.use(express.json())

app.use(cors())

//connection to dataBase
const mongoURL=process.env.DATA_BASE_URL || "mongodb+srv://awais:Ronaldo7@cluster0.l0fariq.mongodb.net/capstone1?retryWrites=true&w=majority"

mongoose.connect(mongoURL)
.then(()=>{
    console.log("Connection DataBase Successfully Done !")
}).catch((err)=>{
    console.log(err)
})

//require routes
const routes=require("./routes/Routes")

app.use(routes)

app.listen(port,()=>{
console.log(`Server is started on PORT ${port}`)
})