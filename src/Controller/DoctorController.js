const { default: slugify } = require("slugify");
const Doctor = require("../Model/Doctor");

module.exports.AddDoctor=(req,res)=>{
   const{ name,email,contactNumber,position,degree1,degree2,degree3,degree4,img,description,experience1,experience2,experience3}=req.body; 
   Doctor.findOne({email:email})
   .exec((error,data)=>{
    if(data){return res.status(201).json({msg:'Doctor All Rady Register'})}

    const _doctor=new Doctor({name,username:slugify(name).toLowerCase(),email,contactNumber,position,degree1,degree2,degree3,degree4,img,description,experience1,experience2,experience3});
    _doctor.save((error,data)=>{
     if(error){return res.status(400).json({msg:'Somethings is Wrong'})}
     if(data){return res.status(200).json({msg:'Doctor Create Successfully' })}
    });
   });
} 

module.exports.GetDoctor=(req,res)=>{
   Doctor.find({})
   .exec((error,data)=>{
      if(error){return res.status(201).json({error})} 
      if(data){return res.status(200).json({data})}
   })
}


module.exports.getDoctorProfile=(req,res)=>{
   console.log(req.params)
   Doctor.findOne({_id:req.params.id})
   .exec((error,data)=>{
      if(error){return res.status(201).json({error})} 
      if(data){return res.status(200).json({data})}
   })
}