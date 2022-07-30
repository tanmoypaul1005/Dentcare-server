const { default: mongoose } = require("mongoose");
const AppointmentSchema=new mongoose.Schema({
    date:{type:String},
    doctor:{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    service:String,
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true},
}, { timestamps: true });
module.exports=mongoose.model('Appointment', AppointmentSchema);
