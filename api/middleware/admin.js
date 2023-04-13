const admin= async(req,res,next)=>{
   if(!req.user.isAdmin) res.status(401).send("Not authorised")
   next()
}
module.exports= {admin}
