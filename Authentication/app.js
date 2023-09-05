const express = require("express");
const mongoose = require("mongoose");
const cookiePareser = require("cookie-parser");
const app = express();

const authRoutes = require('./routes/authRoutes');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookiePareser());

// view engine
app.set('view engine','ejs');

// database connection
const dbURI = 'mongodb://0.0.0.0:27017/node-auth';

mongoose.connect(dbURI).then((res) =>{
    console.log("Database connected...");
}).catch((err)=>{
    console.log("Error in connecting database : ",err);
});

// routes
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/smoothies',(req,res)=>{
    res.render('smoothies');
});

// here we get the routes from routes folder
app.use(authRoutes);

// COOKIES
// app.get('/set-cookies',(req,res)=>{
//     // res.setHeader('Set-Cookie','newUser = true');

//     res.cookie('newUser' , false);
//     // maxAge :- time to expire a cookie
//     // secure :- https
//     // httpOnly :-
//     res.cookie('isEmployee',true , { maxAge : 1000*60*60*24 , httpOnly : true} );
//     res.send("you got cookies...");
// });
// app.get('/read-cookies',(req,res)=>{
//     const cookies = req.cookies;
//     console.log("cookies :- ",cookies.newUser);
  
//     res.json(cookies);
// });



app.listen(3000,()=>{
    console.log(`Listening at port ${3000}`);
});