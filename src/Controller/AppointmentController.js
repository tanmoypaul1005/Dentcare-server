const Appointment = require("../Model/Appointment");

// module.exports.addAppointment=(req,res)=>{
//     const{date,doctor,user}=req.body;
//     console.log(req.body);
    
//     Appointment.findOne({date:date,doctor :doctor})
//     .exec((error,data)=>{
//     if (data) {
//      Appointment.findOne({"patient.user":user})
//      .exec((error,data)=>{
//         if(data){return res.status(201).json({msg:`${date} Appointment All Rady Received`})}

//         Appointment.find({date:date,doctor:doctor}).exec((error, data) => {
//             if (data) {
//               Appointment.findOneAndUpdate({date:date,doctor:doctor}, { $push: { patient: req.body }})
//               .exec((error, data) => {
//                 if (error) return res.status(201).json({ msg: "something is rong"});
//                 if (data) {return res.status(200).json({ msg: "Your Appointment is successfully", data });}
//               });
//             } 
//           });
//      })   
   

//     }else{
//         _appointment = new  Appointment({ date,doctor });
//         _appointment.save((error, data) => {
//             Appointment.findOneAndUpdate({date:date,doctor:doctor},{ $push: { patient: req.body }})
//             .exec((error, data) => {
//               if (error) return res.status(201).json({ msg: "something is rong"});
//               if (data) {return res.status(200).json({ msg: "Your Appointment is successfully" });}
//             });
//         });
//     }
// });
// };


module.exports.addAppointment=(req,res)=>{
  const{date,doctor,user,service}=req.body;
  console.log(req.body);
  
  Appointment.findOne({date:date,doctor:doctor,user:user})
  .exec((error,data)=>{
  if(data){return res.status(201).json({msg:`${date} Appointment All Rady Received`})}

  _appointment = new  Appointment({ date,doctor,user,service});
        _appointment.save((error, data) => {
          if (error) return res.status(201).json({ msg: "something is rong",error});
          if (data) {return res.status(200).json({ msg: "Your Appointment is successfully" });}
        });
  
  });
  };




module.exports.GetAppointment=(req,res)=>{
  const{user}=req.body.id;
  console.log(req.body.id)

  Appointment.find({user:req.body.id}).populate("doctor")
  .exec((error,data)=>{
    if (error) return res.status(201).json({ msg: "something is rong",error});
    if (data) {return res.status(200).json({ data })}
  })
}










  





