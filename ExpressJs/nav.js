const express = require("express");
const app = express();
const port = 3000;

app.get("/",function(req,res){
    res.write("<h1>Welcome to my home page....</h1>");
    res.write("<h2>Hello world!!!</h2>");
    res.end();

});

app.get("/about",(req,res)=>{
    res.status(200).send("Welocome to about page");
});

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page ...");
});

app.get("/temp",function(req,res){
    res.send([
        {
            id : 1,
            name : "tanishqa",
        },
        {
            id : 1,
            name : "tanishqa",
        },
        {
            id : 1,
            name : "tanishqa",
        },
        {
            id : 1,
            name : "tanishqa",
        },
        {
            id : 1,
            name : "tanishqa",
        },
        {
            id : 1,
            name : "tanishqa",
        },
    ]);
})

app.listen(port,()=>{
    console.log(`Listening at port = ${port}`);
});