const jwt = require("jsonwebtoken");


exports.auth = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({msg:"no token"})
    }
    const words = authHeader.split(" ");
    const token = words[1];

     try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
     }
     catch(err){
        console.log(err)
        res.status(401).json({msg:"Invalid Token"})
    }
};
exports.adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: "Admin only" });
  next();
};