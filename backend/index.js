const express=require("express")
const {connection}=require("./config/db")
const {userRouter}=require("./routs/usersrout")
const {authforuser}=require("./moddleware/authforuser")
const cors=require("cors")
const app=express()
app.use(cors({origin:"*"}))
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome")
})

//app.use(authforuser)
app.use("/user",userRouter)







require('dotenv').config()
app.listen(process.env.port, async ()=>{
  try{
    await connection
    console.log("connected to database")
  }catch(err){
    console.log("can't connect to database")
    console.log(err)
  }
})