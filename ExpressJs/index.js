const express = require("express");
const path = require("path");
const app = express();

console.log("DIR NAME: = ",__dirname);
const staticPath = path.join(__dirname,"/public");
console.log("static path : ",staticPath);
// bultin middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.sendFile();
});

app.listen(3000,()=>{
    console.log("Listening at port 3000....");
});