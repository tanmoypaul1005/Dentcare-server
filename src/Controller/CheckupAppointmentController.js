const CheckupAppointment = require("../Model/CheckupAppointment");

module.exports.AddCheckupAppointment=(req,res)=>{
    const{date,user,service}=req.body;
    
    CheckupAppointment.findOne({date:date,user:user,service:service})
    .exec((error,data)=>{
    if(data){return res.status(201).json({msg:`${date} Appointment All Rady Received`})}
    _appointment = new CheckupAppointment({ date,user,service});
          _appointment.save((error, data) => {
            if (error) return res.status(201).json({ msg: "something is rong",error});
            if (data) {return res.status(200).json({ msg: "Your Appointment is successfully" });}
          });
    });
    };


    module.exports.GetCheckupAppointment=(req,res)=>{
      const{user}=req.body;  
      CheckupAppointment.find({user:req.body.user}).populate("service")
      .exec((error,data)=>{
        if (error) return res.status(201).json({ msg: "something is rong",error});
        if (data) {return res.status(200).json({ data })}
      })
    }




    module.exports.AdminAllCheckupAppointmentGet=(req,res)=>{
    CheckupAppointment.find({service:req.body.service,date:req.body.date}).populate("user")
      .exec((error,data)=>{
        if (error) return res.status(201).json({ msg: "something is rong",error});
        if (data) {return res.status(200).json({ data })}
      })
    }    




    module.exports.DeleteCheckupAppointment=(req,res)=>{
  
      CheckupAppointment.findOneAndDelete({_id:req.body.user})
      .exec((error,data)=>{
        if (error) return res.status(201).json({ msg: "something is rong",error});
        if (data) {return res.status(200).json({msg: "Doctor in checkup patient"})}
      })
    
    }



