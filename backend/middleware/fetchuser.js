var jwt = require("jsonwebtoken");
const JWT_SECRET = "JwtSecret"; 

const fetchuser = async (req,res,next) => {
// Get the user from the JWT Token and add id to req object
   const token = req.header("auth-token");
   if(!token) {
     res.status(401).send({error:"Please Authenticate using a valid token"});
   }

   try {
    const data= jwt.verify(token,JWT_SECRET);
    console.log("data",data)
    req.user = data.user;
    next();

   } catch (error) {
    res.status(401).send({error:"Please Authenticate using a valid token"});
   }
}

module.exports = fetchuser;