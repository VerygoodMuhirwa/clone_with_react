const jwt= require('jsonwebtoken')
const auth= async(req,res,next)=>{
    const authHeader= req.header('Authorisation')
    if(!authHeader) res.status(500).send("No headers sent")
    const token= authHeader.split(' ')[1]
    if(!token){
        res.send("No token created ")
    }
    req.user= token
    //verify token


    return jwt.verify(token, config.get('jwtPrivateKey'),(error)=>{
        if(error) throw error
    })

    next()
}

module.exports= {auth}