// 1. import user model from thw model folder
const User = require('../models/User');

// handle error cutomize error from email & password
const handleErrors = (err) =>{
    console.log(err.message , err.code);
    let errors = {email : '',password : ''};

    // duplicate email
    if(err.code === 11000){
        errors.email = 'Email already registered !!!!';
        return errors;
    }


    // validation errors
    if(err.message.includes('users validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            // console.log(error.properties);
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}


module.exports.signup_get = (req,res) =>{
    res.render('signup');
}

module.exports.login_get = (req,res) =>{
    res.render('login');
}

module.exports.signup_post = async (req,res) =>{
    const { email,password } = req.body;
    console.log("Signup ");
    console.log("Email : ",email);
    console.log("Password : ",password);
    // storing signup data into mongoDB
    try {
        const user =  await User.create({email , password});
        res.status(201).json(user);
    } catch (error) {
        const errors = handleErrors(error);
        // console.log("Error in signup Post : ",error);
        res.status(400).json({errors});
    }
    // res.send('new signup ');
}

module.exports.login_post = async (req,res) =>{
    // get data from the login form 

    const { email,password } = req.body;
    console.log("Login ");
    console.log("Email : ",email);
    console.log("Password : ",password);
    res.send('user login');
}