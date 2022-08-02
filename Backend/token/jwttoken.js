const jwt = require("jsonwebtoken")

const genertetoken = (id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN,{
        expiresIn:"30d",
    })
};

module.exports=genertetoken