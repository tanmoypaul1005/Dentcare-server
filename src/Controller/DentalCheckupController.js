const DentalCheckup = require("../Model/DentalCheckup");

module.exports.AddDentalCheckup=(req,res)=>{
    const{date,doctor}=req.body;
    DentalCheckup.find({date:req.body.date})
    .exec((error,data)=>{
        if(data){return res.status(201).json({msg:`${date} Appointment All Rady Created `})}

        const _appointment=Appointment({date,doctor})
    })
}
