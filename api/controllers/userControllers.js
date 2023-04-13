const express= require('express')
const Admin= require('../middleware/admin')
const auth= require("../middleware/auth")
const router= express.Router()
const db= require("../models/db")
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const Joi= require('joi')
const config= require('config')

function validateUser(item) {

    const userSchema = Joi.object({
      Firstname: Joi.string().min(3).required(),
      Lastname: Joi.string().min(3).max(50).required(),
      Email: Joi.string().email({ minDomainSegments: 2 }).max(255).required(),
      Password: Joi.string().min(6).max(100).required(),
    });
    const { error } = userSchema.validate(item);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

}


//function to create the token for the user
const createAuthToken= async()=>{
    return(
        jwt.sign(
            {id:this._id,Firstname:this.Firstname, Lastname:this.Lastname,Email:this.Email,isAdmin:this.isAdmin},
            config.get('jwtPrivateKey')
            )
    )

    next()
}

router.post("/create",async(req,res)=>{
    const {Firstname,Lastname, Email,Password} = req.body
    console.log(req.body);
    try {
        const user= await db.findOne({where:{Email}})
        if(user)res.status(403).json({message:"The user with that Email already exists"})
    //first validate the user
  validateUser(req.body)
        //harsh the password for the user
        const salt= await bcrypt.genSalt(10)
        const harshedPassword= await bcrypt.hash(Password,salt)
        console.log(harshedPassword);
        const newUser= await db.create({Firstname,Lastname,Email,Password:harshedPassword})
        console.log('User created successsfully');
        res.status(201).json({message:"User created successfully in the database",newUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }


})

router.post("/login",async(req,res)=>{

    const { Email,Password} = req.body
try {
    const user= await db.findOne({where:{Email}})
if(!user) return res.status(401).json({message:"Invalid Email or password"})

//compare the passwords
const salt= await bcrypt.genSalt()
const hashedPassword= await bcrypt.hash(Password,salt)

if(! hashedPassword == await user.Password){
    res.status(401).json({message:"Invalid Email or password"})
}

const Token=  createAuthToken(user)
if(!Token)res.status(403).send("No token created for the user")
res.status(200).json({message:"User logged in successfully",Token})
//authorise him

const {error}= [Admin.admin, auth.auth]
if(error)res.status(401).json({error: error.message})
console.log("User authorised successfully");
}

catch(error){res.status(500).send(error)}

})


module.exports= router