const express=require("express")
//const mongoose = require("mongoose")
const jwt=require("jsonwebtoken")
const {usermodel}=require("../models/usersmodel")
const {prodmodel}=require("../models/cartmodel")
const {cartmodel}=require("../models/cartpage")
const bcrypt=require("bcrypt")
const userRouter=express.Router()




userRouter.post("/create",async (req,res)=>{
    let {name,number,mail,pass}=req.body
    try{
        bcrypt.hash(pass, 5,async (err, hash)=> {
                  if(err){
                    console.log("err in hashing")
                    console.log(err)
                  }else{
                        let user=new usermodel({name,number,mail,pass:hash})
                        await user.save()
                        res.send(user)
                        console.log("user is added")
                  }
        });

    }catch(err){
        res.send("can't add user")
        console.log("can't add user")
        console.log(err)
    }
})

userRouter.post("/login",async (req,res)=>{
    let {mail,pass}=req.body
    try{
        let user=await usermodel.find({mail})

        if(user.length>0){
            bcrypt.compare(pass, user[0].pass, (err, result)=> {
                if(result == true){
                    var token = jwt.sign({ userID: user[0]._id }, 'yuvraj');
                    res.send({"message":"login successful","token":token})
                }else{
                    res.send("can't generate token")
                    console.log("can't generate token")
                    console.log(err)
                }
            });
        }else{
            res.send("can't find user")
        }
      

    }catch(err){
        res.send("can't find user")
        console.log("can't find user")
        console.log(err)
    }
})

userRouter.get("/products",async(req,res)=>{

    try{
        let data=await prodmodel.find()
        res.send(data)
    }catch(err){
           res.send("can't find data")
           console.log(err)
    }
})

userRouter.get("/dscprod",async(req,res)=>{
    
    try{
        let data=await prodmodel.find().sort({price:-1})
        res.send(data)
    }catch(err){
           res.send("can't find data")
           console.log(err)
    }
})
userRouter.get("/ascprod",async(req,res)=>{
    
    try{
        let data=await prodmodel.find().sort({price:1})
        res.send(data)
    }catch(err){
           res.send("can't find data")
           console.log(err)
    }
})

userRouter.post("/addcart",async (req,res)=>{
    let data=req.body
    try{
        let cart=await cartmodel.insertMany(data)
        console.log(cart)
        res.send(cart)
    }catch(err){
        res.send("can't add item to cart")
    }
})
userRouter.get("/cart",async (req,res)=>{
   
    try{
        let cart=await cartmodel.find()
        console.log(cart)
        res.send(cart)
    }catch(err){
        res.send("can't add item to cart")
    }
})
userRouter.delete("/cart/delete",async (req,res)=>{
   let id=req.body.id
   res.send(id)
//    console.log(req.body)
    try{
        let cart=await cartmodel.findByIdAndDelete({id:id})
        console.log(cart)
        res.send(cart)
    }catch(err){
        res.send("can't add item to cart")
    }
})
// userRouter.patch("/update/:id",async (req,res)=>{
//     let data=req.body
//     try{
//         let user=await usermodel.find({})
//     }catch(err){}
// })

module.exports={userRouter}







// {
//     "name":"String",
//      "number":1234567890,
//      "mail":"yuvraj@gmail.com",
//      "pass": "yuvraj"
//  }