// 1. import user model from thw model folder
const User = require('../models/User');

// jwt authentication
const jwt = require('jsonwebtoken');

// handle error cutomize error from email & password
const handleErrors = (err) =>{
    console.log(err.message , err.code);
    let errors = {email : '',password : ''};

    // login handling error 
    // incorrect email from userSchema login function
    if(err.message === 'incorrect email'){
        errors.email = 'that email is not registered...';
    }

    // incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'that password is incorrect...';
    }

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

// max age in seconds
const maxAge = 3 * 24 * 60 * 60;
const  createToken = (id) =>{
    // id is payload from database , 'net ninja secret is a secret => we generate and signature
    return jwt.sign({ id }, 'net ninja secret' , {
        expiresIn: maxAge,
    });
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
        
        // JWT => token genreated token
        const token = createToken(user._id);

        // send JWT with cookie with the response
        res.cookie('jwt', token , { httpOnly : true , maxAge : maxAge * 1000});
        
        res.status(201).json({ user : user._id });
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

    try{
        const user = await User.login(email, password);
        
        // JWT => token genreated token
        const token = createToken(user._id);

        // send JWT with cookie with the response
        res.cookie('jwt', token , { httpOnly : true , maxAge : maxAge * 1000});
        
        res.status(200).json({ user: user._id });
    }catch(error){
        // user defined error
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }

    console.log("Login ");
    console.log("Email : ",email);
    console.log("Password : ",password);

    // res.send('user login');
}

module.exports.logout_get = (req,res) =>{
    // delete the jwt cookie that made during login
    res.cookie('jwt','', { maxAge : 1});
    res.redirect('/');
}