const fs = require("fs");

// read file async
let data = fs.readFileSync('./files/xyz/x.txt');
console.log("data using sync : ",data.toString());


// async
fs.readFile("./files/a.txt","utf8",function(err,data){
    if(err){
        console.log("Error in reading file..");
    }
    else{
        console.log("data : ",data);
    }
});

// async
fs.writeFile("./files/a.js","console.log('Me writing a file');" ,function(err){
    console.log("error in writing file...",err);
});

// write file syncronously
fs.writeFileSync("./files/xyz/x.txt","hello this is file during sync operation");

console.log("done");


// delete file
// sync API fs.unlinkSync()

try {
    fs.unlinkSync('./files/a');
} catch (error) {
    console.log("error occured");
}
console.log("delete a file using sync operation");

// async API fs.unlink()

fs.unlink("./files/a.jpg",function(err){
    if(err){
        console.log("Error in deleting : ");
        return;
    }
    console.log("file deleted successfully");
});

console.log("delete file using async operation");

// make directory
// fs.mkdirS9ync()  sync

try {
    if(fs.existsSync('Sync')){
        console.log("directory exist..");
    }
    else{
        fs.mkdirSync("Sync");
    }
} catch (error) {
    console.log("Error in making dir :");
}
console.log("after mkdir sync");


// fs.mkdir() async

fs.mkdir('Async',function(err){
    if(err){
        console.log("error in making directory using ASYNC...");
    }
    else{
        console.log("directory created... ASync");
    }
});

// remove directory 
// fs.rmdirSync()   sync

try {
    if(fs.existsSync("Sync")){
        fs.rmdirSync("Sync");
        console.log("remove directory Sync...");
    }
    else{
        console.log("Sync directory does not exist...");
    }
} catch (error) {
    console.log("Error in deleting directory..");
}

console.log("After deleting directory Sync");

// fs.rndir()  async

fs.rmdir("Async",function(err){
    if(err){
        console.log("Error in deleting directory ....");
    }
    else{
        console.log("deleted successfully");
    }
});


// Get content of a folder....

// fs.readdirSync() //sync
let directory = fs.readdirSync("./utils");
console.log("Directory data using Sync ...",directory);


// fs.readdir()  //async
console.log("current Directory >>>> ",__dirname);
fs.readdir(__dirname,function(err,data){
    if(err){
        console.log("error in reading directory ...");
    }
    else{
        console.log("Content of directory ::",data);
    }
});

// Rename File....
// Sync
try {
    if(fs.existsSync('./files/xyz/y.txt')){
        fs.renameSync("./files/xyz/y.txt","./files/xyz/x.txt");
    }
    else{
        console.log("File does not exists during rename...");
    }
} catch (error) {
    console.log("Error in rename the file...");
}

console.log("Rename file sync ....");

// Async
fs.rename("./files/b.txt","./files/c.txt",function(err){
    if(err){
        console.log("Error in rename the file async///");
    }
    else{
        console.log("Renamed successfully Async...");
    }
});


// state of file
console.log("State :: ",fs.lstat("./files",function(err){
    console.log("Error in state ...");
}));