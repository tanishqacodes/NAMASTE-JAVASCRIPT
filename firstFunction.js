a();
// b() => type error as b :  is first phase as undefined.


//  function statement aka function declaration
function a(){
    console.log("a is called");
}
// the major differnece between function statement and function expression is hoisting
// if we call functioon a before it declaration then it will fine 
// if we call function b before it declaration it throw an error

a();

// ============================================================================

// function expression
var b=function(){
    console.log("b called");
}
b();

// ===============================================================================


// anonymous function
// function (){

// }

// function without name is known as ananymous function 
// it doesnot have it own identity 
// it is used at a place where function is used as avalue 

// =====================================================================================

// Named function expression
var c = function xyz(){
    console.log("c called",xyz);
}

c();
// xyz(); => gives reference error as xyz is not globally defined..

// =======================================================================================

// difference between the parameter and argument 
var d=function(param1 ,param2){
    // this param1 and param2 is the local variable inside the function 
    console.log("param:1",param1,"param:2",param2);
}
    
d(4,4);
    
// this 4 4 is the argument of the function 
// the value which is passed inside the function is known as argument 

// ===============================================================================

// first class function

// First Class Citizen
// the ability of function used as value and can pe passed as an argumrnt to another function 
// and can be returned as a function this ability  is known as first class function 


var e=function (param3)
{
    return function xyz()
    {
        console.log("xyz");
    }
}
console.log(e);

// ==========================================================================================



