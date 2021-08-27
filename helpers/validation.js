const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (data)=>{
    const token = jwt.sign(data,process.env.SECRET,{expiresIn:"24h"});
    return token;
}

const authenticate = (req,res,next)=>{
    const header = req.headers.authorization;
    if(header){
        if(header.startsWith('Bearer')){
            const token = header.split(' ')[1];
            jwt.verify(token,process.env.SECRET,(err,decoded)=>{
                if(err){
                    res.json({error: 'Token is invalid'})
                }else{
                    console.log(decoded)
                    next();
                }
            })
        }
    }else{
        res.json({error:"Authorization header is missing"});
    }
   
}

module.exports = {
    createToken,
    authenticate
};