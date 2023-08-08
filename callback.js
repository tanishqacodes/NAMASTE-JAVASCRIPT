setTimeout(function(){
   // this setTimeout asychronous operation was not possible without call back
   // it doesnot wait for timeout to expire 
   console.log("Timer: ")
},5000);


function x(y){
   console.log("X");
   y();
}

x(function y(){
   console.log("y");
   // the y function is a callback function
   // call the function in some where in code 
});


// Javascript  is a synchronus and single thread language

// Blocking the main thread

// deep about event listeners

// clousre demo with event listeners

// scope demo with event listeners

// Garbage collection and remove event listeners