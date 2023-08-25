const http = require("http");

const receptor = function(request,response){
    console.log("request : ",request.url);
    response.end("hello world...");
}

const server = http.createServer(receptor);

server.listen(3000,function(){
    console.log("Server listening at port : 3000");
});