console.log("1...");

function x(){
    var i = 1;
    setTimeout(function(){
        console.log("i : ",i);
        // this function form a closure and remember the reference of i

    },2000);
     // once the timer is expire then again take this function and take it to callstack and print the function

    console.log("Hello ....");
}

x();


// =========================================================

console.log("2....");

function y() {
    for (var i = 1; i <= 3; i++) {
        // if we use let at  the place of var whcih is blocked scope 
        // -------
        // each and every time of loop setTimeout is called and function form a closure with a new variable itself
        // the copy of i in each iteration is new 
        // here let is used beacuse of let is blocked scope and create a new copy every tiem 
        // 
        setTimeout(function () {
            console.log(i);
            // this i is pointing the same spot in the memory of the i
            // remember the same reference of i 
        }, i * 1000);
    }
    console.log("Hello ....");
}
y();


// Your expected output is Namaste Siddhant 
// 1
// 2
// 3

// but it give the 
// 6
// 6
// 6
// closure is liked funciton along with lexical environment


function z(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Hello ..");
}
z();

// output : 
// 1
// 2
// 3
// 4
// 5

// ==============================================================

// for using var there is solution of making a closure and wraped the setTimeout function
//in another function 
function a() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);

    }
    console.log("hi...");
}
a();

// using this method we create a new copy of i 
// which lead to call everytime setTimeout function which store in the separate memory space
// ---------------------------------------------------------------------
// closure is a combinaiton of function and lexical Scope
// each and every function in javascrpit has access to its outer lexical environment 
// acess to the variable and funciton which is present in the environment of its parent 

// if function is executed in other scope but its still remember outer lexical environment where it is orginaly present 



function outest()
{
    var c=20;
    function outer(b)
    {
        function inner()
        {
            console.log(a,b,c);
        }
        let a=10;
        return inner;
    }
    return outer;
}
var close=outest()("hello world ...");
// this will return the outer function

var close =(outest())("hello!!!");
// this will return the inner function

close();