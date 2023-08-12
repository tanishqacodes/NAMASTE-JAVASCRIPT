const arr=[5,1,3,2,6];

// reduce function basically used at a place where you have to take elements
// of an array and come with single value output out of them 

// sum or maximum number in the array

// non-functional ways 


function sumi(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum ;
}
console.log("Sum using function : ",sumi(arr));



// reduce function takes 2 paramter first on isaccumulator and second one is cuurent 
const outpt=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log("sum using reduce : ",outpt);

// this 0 represent the inital value pf acc  
// curr represent the value of the arr inside the reduce function
// acc is used to accumulate the value what we have to get out of value present in arr

const maxiOutput=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0); 
console.log(maxiOutput);



const users=[
    {firstName:"Siddhant",lastName:"kr",age:23},
    {firstName:"tanishqa",lastName:"sharma",age:43},
    {firstName:"mishal",lastName:"shahari",age:44},
    {firstName:"Siddhant",lastName:"kr",age:23},
];

const anss=users.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=acc[curr.age]+1;
    }
    else {
        acc[curr.age]=1;
    }
    return acc;
},{})
console.log(anss);