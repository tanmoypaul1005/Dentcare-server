const { default: mongoose } = require("mongoose");
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const DoctorSchema=new mongoose.Schema({
    // serial: {
    //     type: Number,   
    // },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },
    contactNumber:{
        type: Number,
        required: true,
    },
    position:{type:String},
    degree1:{  type: String},
    degree2:{  type: String},
    degree3:{  type: String},
    degree4:{  type: String},
    description:{type:String},
    experience1:{type:String},
    experience2:{type:String},
    experience3:{type:String},
}, { timestamps: true });
// DoctorSchema.plugin(AutoIncrement, {inc_field: 'serial'});
module.exports=mongoose.model('Doctor', DoctorSchema);

