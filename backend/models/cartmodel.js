const mongoose=require("mongoose")

const prodchema=mongoose.Schema({
    img:String,
    price:Number
})
const prodmodel=mongoose.model("products",prodchema)
module.exports={
    prodmodel
}