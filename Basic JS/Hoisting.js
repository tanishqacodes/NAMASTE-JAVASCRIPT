
console.log("Above");
getName();
console.log(x);
console.log(getName);
console.log(getName2);
console.log(getName3);

var x = 7;

function getName(){
    console.log("Hello java script");
}

console.log("Below");
getName();
console.log(x);


// incase of anaomous / arrow function it behave as same as var

var getName2 = ()=>{
    console.log("Hello java script 2 ");
}

var getName3 = function (){
    console.log("Hello java script 3 ");
}


console.log(getName2);
console.log(getName3);
