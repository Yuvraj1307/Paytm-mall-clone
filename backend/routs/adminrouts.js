const express=require("express")
const {prodmodel}=require("../models/cartmodel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const adminRouter=express.Router()


adminRouter.post("/login",async (req,res)=>{
    let {mail,pass}=req.body
    try{
        

        
             
                
                    var token = jwt.sign({pass}, 'yuvraj');
                    res.send({"message":"login successful","token":token})
 
        
      

    }catch(err){
        res.send("can't find user")
        console.log("can't find user")
        console.log(err)
    }
})
adminRouter.post("/products/add",async(req,res)=>{
    let data=req.body
    //console.log(data)
    try{
                        let user=new prodmodel(data)
                        await user.save()
                        res.send(user)
                        console.log("user is added")
                  
        

    }catch(err){
        res.send("can't add user")
        console.log("can't add user")
        console.log(err)
    }
})



adminRouter.get("/products",async(req,res)=>{

 
    
    
 

      
    try{
        let data=await prodmodel.find()
        res.send(data)
    
    }catch(err){
           res.send("can't find data")
          
           console.log(err)
    }
       


   
})



adminRouter.delete("/products/delete",async(req,res)=>{
    let id=req.body.id
 
console.log(id)
   
 
   
    try{
        let cart=await prodmodel.findOneAndRemove({_id:id})
        console.log(cart)
        res.send(cart)
    }catch(err){
        res.send("can't add item to cart")
    }
})
module.exports={adminRouter}