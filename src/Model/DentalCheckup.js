const { default: mongoose } = require("mongoose");
const mongooseSerial = require("mongoose-serial")
const DentalCheckupSchema=new mongoose.Schema({
    date:{type:String},
    patient:[
    {
      serialNumber: String,
      user:{type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true},  
    }
   ],
}, { timestamps: true });
DentalCheckupSchema.plugin(mongooseSerial, { field:"serialNumber"});
module.exports=mongoose.model("DentalCheckup",DentalCheckupSchema)