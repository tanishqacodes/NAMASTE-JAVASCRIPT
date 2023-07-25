function a(){
    console.log("b : ",b);
}

var b = 10;
a();

function x(){
    y();
    function y(){
        console.log("z:",z);
    }
}
var z = 100;
x();

function p(){
    var q = 1000;
    r();
    function r(){
        console.log("q : ",q);
    }
}
p();
// console.log("q",q);