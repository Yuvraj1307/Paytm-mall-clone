const mongoose=require("mongoose")
const brandschema=mongoose.Schema({
    brand:String,
    img:String
})

const brandmodel=mongoose.model("brands",brandschema)
module.exports={
    brandmodel
}