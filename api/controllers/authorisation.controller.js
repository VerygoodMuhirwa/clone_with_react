const config= require('config')
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')
const db= require("../models/db")
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




 const loginUser = async(req,res)=>{
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
console.log(user);
const Token=  createAuthToken(user)
if(!Token)res.status(403).send("No token created for the user")
res.status(200).json({message:"User logged in successfully",Token})
} catch (error) {
    res.status(500).json({error})
}

}

module.exports= {loginUser}