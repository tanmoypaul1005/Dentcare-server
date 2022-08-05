const { default: mongoose } = require("mongoose");
const CheckupAppointmentSchema=new mongoose.Schema({
    date:{type:String},
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true},
    service:{type: mongoose.Schema.Types.ObjectId, ref: 'DentalCheckup', required: true},
}, { timestamps: true });
module.exports=mongoose.model("CheckupAppointment",CheckupAppointmentSchema)