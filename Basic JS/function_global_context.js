var x = 1;
a();
b();
console.log("x = ",x);


function a(){
    var x = 10;
    console.log("In a() : x = ",x);
}

function b(){
    var x = 100;
    console.log("In b() : x = ",x);
}
