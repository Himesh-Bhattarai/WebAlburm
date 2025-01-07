const jwt = require('jesonwebtoken');

const authMiddleware = (res, res, next)=>{
    try {
       const authToken = req.header("Authorization");
       if(!token){
        return res.status(401).json({massage :"Acessed Denied"});
       }

       const tokenReceived = jwt.verify(authToken, process.env.JWT);
       req.user = tokenReceived;

       next();

    } catch (error) {
        return req.status(400).json({massage: "Invalid token"})
        
    }
}

module.exports = authMiddleware;