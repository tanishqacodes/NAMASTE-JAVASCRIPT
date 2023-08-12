if(true){
    var x = 10;
    console.log(x);
}

// block : is compound statement which group the mutiple js statement
var a = 1000;
let b = 200;
const c = 3000;

{
    // 10 overwrite 1000
    var a = 10;
    let b = 20;
    const c  = 30;

    console.log("a: ",a);
    console.log("b: ",b);
    console.log("c: ",c); 
}

// var -> gloabal scope
// let and const -> block scope


console.log("a: ",a);
console.log("b: ",b); 
console.log("c: ",c); 

// console.log("b: ",b);
// console.log("c: ",c);
// gives refernece error


//illegal
// let a = 10;
// {
//     var a = 1000;
// }


//legal
// var a = 10;
// {
//     let a = 1000;
// }