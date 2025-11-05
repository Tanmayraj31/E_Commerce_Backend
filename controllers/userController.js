const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isAborted } = require("zod/v3");
const zod = require("zod");


//signup schema
const signupSchema = zod.object({
    name: zod.string().min(1,"NAme is Required"),
    email: zod.email("Invalid email address"),
    password: zod.string().min(6, "must be 6"),
    admin: zod.string().optional(),
})


exports.signup = async (req, res)=>{
    const validateData = signupSchema.parse(req.body);
    const {name, email, password, admin} = validateData;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            msg:"User already exist!"
        })};

         const hashed = await bcrypt.hash(password, 10);
         const isAdmin = admin === process.env.ADMIN_SECRET;
         const user = await User.create({name, email,password: hashed, isAdmin})
         res.json({
            msg:"user created successfully", user
         });
}

exports.signin = async (req, res)=>{
    const {email, password}= req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"User doesn't exist"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return  res.status(400).json({msg:"Inavalid passsword"})
    }

    const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET);
    res.json({msg:"Login Successfull", token});
}
