const jwt=require("jsonwebtoken")

const authforuser=(req,res,next)=>{
    
if(req.url!="/user/login"&&req.url!="/user/create"){
      
   let Token=req.headers.authorization
    
    
      
 
   jwt.verify(Token, 'yuvraj', async (err, decoded)=> {
       if(err){
           res.send("invalid token")
           
           console.log(err)
       }else{
             next()
       
          
       }
   });
}else if(req.url!="/user/login"||req.url!="/user/create"){
    next()
} 
//     if(req.url=="/user/update"){
//         const token=req.headers.authorization
//         if(token){
//             const decoded=jwt.verify(token,"yuvraj")
//             if(decoded){
//                 req.body.userID=userID
//                 next()
//             }else{
//             res.send("please login fist")
//         }
//     }else{res.send("please login first")}
// }
}
module.exports={
    authforuser
}