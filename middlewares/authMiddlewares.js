const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error: 'Acces Denied'});
    }
   
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // const verified = jwt.verify(token, 'your_jwt_secret');
        req.user = verified;
        next();
    } catch(err){
        res.status(400).json({error: 'Token is Invalid'})
    }
};

module.exports = authenticateToken;