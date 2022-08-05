const DentalCheckup = require("../Model/DentalCheckup");

module.exports.AddDentalCheckup=(req,res)=>{
    const{name,price,img}=req.body;
    console.log(req.body.name)
    DentalCheckup.findOne({name:name})
    .exec((error,data)=>{
        if(data){return res.status(201).json({msg:`${name} Item All Rady Created `})}

        const _appointment=DentalCheckup({name,price,img})
        _appointment.save((error,data)=>{
            if(error){return res.status(201).json({error})} 
            if(data){return res.status(200).json({msg:`${name} successfully Created `,data})}
        })
    })
}


module.exports.GetDentalCheckup=(req,res)=>{
    DentalCheckup.find({}).sort({ createdAt: -1 })
    .exec((error,data)=>{
        if(error){return res.status(201).json({error})} 
        if(data){return res.status(200).json({data})}  
    })
}


module.exports.DeleteDentalCheckup=(req,res)=>{
    DentalCheckup.findOneAndDelete({_id:req.body.id})
    .exec((error,data)=>{
        if(error){return res.status(201).json({error})} 
        if(data){return res.status(200).json({msg:`Item successfully Delete`})}  
    })
}
