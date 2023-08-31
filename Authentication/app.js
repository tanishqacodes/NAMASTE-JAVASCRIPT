const express = require("express");
const mongoose = require("mongoose");
const app = express();

const authRoutes = require('./routes/authRoutes');

// middleware
app.use(express.static('public'));
app.use(express.json());

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

app.listen(3000,()=>{
    console.log(`Listening at port ${3000}`);
});