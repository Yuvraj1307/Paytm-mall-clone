// const jwt=require("jsonwebtoken")

// const authforuser=(req,res,next)=>{
    
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
// }
// module.exports={
//     authforuser
// }