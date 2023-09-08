const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) =>{

    const token = req.cookies.jwt;

    // check json web token exists and is verified
    // token exists
    if(token){
        // verify it
        jwt.verify(token,'net ninja secret',(err,decodedToken)=>{
            if(err){
                console.log("error in verification of token : ",err.message);
                res.redirect('/login');
            }
            else{
                console.log("decoded token : ",decodedToken);
                next();
            }
        });
    }
    else{
        res.redirect('/login');
    }

}

module.exports = { requireAuth };