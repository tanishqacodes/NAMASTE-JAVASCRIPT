// create server and on server readn the file

const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");

// const receptor = function(req,res){
//     console.log("Request : ",req.url);
//     res.end("Hello world///");
// }

const server = http.createServer();

// server.on('request',(req,res)=>{
//     res.setHeader('Content-Type' ,'text/plain');
//     fs.readFile("./stream/input.txt",function(err,data){
//         if(err){
//             console.log("error in reading file....",err);
//             return;
//         }
//         res.end("Data : ",data.toString());
//     });
// });

// server.on("request",(req,res)=>{
//     const rstream = fs.createReadStream("./stream/input.txt");

//     rstream.on("data",(chunkData)=>{
//         res.write(chunkData);
//     });
//     rstream.on("end",()=>{
//         res.end();
//     });
//     rstream.on("error",(err)=>{
//         console.log("Error ",err);
//         res.end("Some error occurred!!!!");
//     });
// });


server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("./stream/input.txt");

    rstream.pipe(res);
})

server.listen(3000,"127.0.0.1",function(){
    console.log("Listening on port [3000]...");
});