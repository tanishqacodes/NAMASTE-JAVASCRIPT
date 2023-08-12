function aa() {
    var count = 0;
    document.getElementById("clickMe").addEventListener("click", function () {
        console.log("Let's go", ++count);
    });
}
aa();

// why do we remove the event listener
// event listener are heavy (it takes memory) when we attach event it form a closure 
// even call stack is empty but these program takes a memory and not freeing the memory
// 
// when we remove the event listener then all the variavble which is held by the closure will be garbage collected 