const mongoose=require("mongoose")
const userschema=mongoose.Schema({
    name:String,
    number:Number,
    mail:String,
    pass:String
})

const usermodel=mongoose.model("users",userschema)
module.exports={
    usermodel
}