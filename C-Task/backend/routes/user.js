const express=require("express");
const userRoutes=express.Router();
const bcrypt=require("bcryptjs");;
const User=require('../Models/User');
const jwt=require("jsonwebtoken");

userRoutes.post("/register",async(req,res)=>{
   //checking user mail id in database
   const emailExit=await User.findOne({
        email:req.body.email
   });

    if(emailExit) return res.status(400).send("Email already exists");
   
   //hashing password
   const salt=await bcrypt.genSalt(10);
   const hashedPassword=await bcrypt.hash(req.body.password,salt);

    //create new user
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
        });

    try {
        
        const savedUser=await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

//user Login

userRoutes.post("/login",async(req,res)=>{
    //checking user email id in database

    const user=await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("email is wrong");

    //checking password

    const validPass=await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send("invalid password");
            // res.send("User Logged In")

    
//create and assign tokens
const token=jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    res.header("auth-token",token).send({token:token  });
});


module.exports=userRoutes;