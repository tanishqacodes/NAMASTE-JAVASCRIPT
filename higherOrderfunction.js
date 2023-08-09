function z(){
    console.log("namaste");
}
// here x is the call back function and y is the higher order function 

function y(x){
    x();
}
// calculation of the circle whose radius is given


const radii=[3,1,2,4];
const calArea=function (radii){
    const output=[];
    for(let i =0;i<radii.length;i++){
        output.push(Math.PI*radii[i]*radii[i]);

    }
    return output;
};
console.log("Area of previous : ",calArea(radii));

// =================================================================================================

// calculate the circumfernece 
const calCir=function (radii){
    const output=[];
    for(let i=0;i<radii.length;i++)
    {
        output.push(Math.PI*2*radii[i]);
    }
    return output;
};
console.log("Circumference of previous : ",calCir(radii));
// ==============================================================================================================



const area= function(radius){
    return Math.PI*radius*radius;
}

const circumfernece = function(radius){
    return Math.PI*2*radius;
}
// if we add Array.prototype to calculate function this act as an map 

const calculate = function  (radii,logic){
    const output=[];
    for(let i=0;i<radii.length;i++){
        output.push(logic(radii[i]));
    }
    return output;
}
// this calculate function is similar to the map function 

console.log("Area : ",calculate(radii,area));
console.log("Circumference : ",calculate(radii,circumfernece));

// map whole array with an logic
console.log("Area using map function : ",radii.map(area));


// -------------------------------------------------------------------------------------
// similar to map

Array.prototype.calculate =function  (logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
// this is kind of like a pollyfil
console.log("Array using prototype (area) : ",radii.calculate(area));






// why this code is good 
// we abstract our code in smaller function 


// functional programming 
// reusabilty
// modularity
// how u pass the function in different function 
