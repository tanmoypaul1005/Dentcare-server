const { default: mongoose } = require("mongoose");
const mongooseSerial = require("mongoose-serial")
const DentalCheckupSchema=new mongoose.Schema({
    name:{type:String},
    price:{type:String},
    img:{type:String}
}, { timestamps: true });
module.exports=mongoose.model("DentalCheckup",DentalCheckupSchema)