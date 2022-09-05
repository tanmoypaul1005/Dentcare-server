const { default: slugify } = require("slugify");
const Auth = require("../Model/Auth");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ErrorHander = require("../utils/ErrorHander");
module.exports.AddUser=(req,res)=>{
//    const{ name,email,password,contactNumber}=req.body; 
//    Auth.findOne({email:req.body.email})
//    .exec((error,data)=>{
//     if(error) return next(new ErrorHander("Somethings is Wrong", 201));
//     if(data){return res.status(201).json({msg:'User All Rady Register'})}

//     const _auth=new Auth({name,username:slugify(name).toLowerCase(),email,password,role:'user',contactNumber});
//     _auth.save((error,data)=>{
//       const token = jwt.sign({ _id: data._id, name: data.name, email: data.email }, process.env.JWT_SECRET, { expiresIn: '30d' })
//      if(error){return res.status(400).json({msg:'Somethings is Wrong'})}
//      if(data){return res.status(200).json({msg:'User Create Successfully',token })}
//     });
//    });
}



module.exports.UserLogin = async (req, res, next) => {
   const { email, password, role, Status } = req.body;
   console.log(req.body)
   // checking if user has given password and email both
   if (!email || !password) {
       return next(new ErrorHander("Please Enter Email & Password", 201));
   }
   const _user = await Auth.findOne({ email }).select("+password");
   if (!_user) {
       return next(new ErrorHander("Invalid email or password", 201));
   }
   const isPasswordMatched = await bcrypt.compare(password, _user.password)
   if (!isPasswordMatched) {
       return next(new ErrorHander("Invalid email or password", 201));
   }
   // if (_user.Status === 'approve') {
       const token = jwt.sign({ _id: _user._id, name: _user.name, email: _user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
       res.status(200).json({ success: true,msg:'Your Login Successfully', _user, token });
   // }
}
