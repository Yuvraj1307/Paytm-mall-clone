const mongoose=require("mongoose")

const cartschema=mongoose.Schema({
    img:String,
    price:Number,
    id:String
})
const cartmodel=mongoose.model("cartitems",cartschema)
module.exports={
    cartmodel
}