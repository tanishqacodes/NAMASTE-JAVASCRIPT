function x(){
    var a  =10;
    function y(){
        console.log(a);
    }
    y();
}
x();

// function bundled along with lexical scope

function f(){
    var a  =10;
    function g(){
        console.log(a);
    }
    return g;
}

var z = f();
console.log(z);

z();

// This is closure 
// function along wth lexical scope is form a closure
// closure gives you access to an outer function's scope from an inner function

// in js function should also be returned as a function output


function a(){
    var x  =10;
    function b(){
        console.log(x);
    }
    x =  1000;
    return b;
}

var z = a();
console.log(z);  //1000



// USES OF CLOSURE 
// -Module Design Pattern 
// -Currying
// -function like once
// -memoize
// -maintaing state in async world
// -setTimeouts
// -Iterators
// -and many more
