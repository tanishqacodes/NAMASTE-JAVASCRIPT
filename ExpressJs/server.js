const http = require("http");
const fs = require("fs");

const receptor = function(req,res){
    console.log("Request :::",req.url,req.method);
    // res.end("Hello World.....");

    const url = req.url;
    const method = req.method;
    if(url === '/'){

        res.writeHead(200,{
            "Content-Type" : "text/html"
        });


        fs.readFile("./utils/index.html","utf-8",function(err,data){
            if(err){
                res.end("Error occured...");
            }
            else{
                res.end(data);
            }
        });
    }
    else if(url === '/about'){
        fs.readFile("./utils/about.html","utf-8",function(err,data){
            if(err){
                res.end("Error occured...");
            }
            else{
                res.end(data);
            }
        });
    }
    else if(url === '/contact'){
        fs.readFile("./utils/contact.html","utf-8",function(err,data){
            if(err){
                res.end("Error occured...");
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.end("Url Not found: 404");
    }
}


const server = http.createServer(receptor);

server.listen(3000,function(){
    console.log("Listening at port number : [3000]");
});