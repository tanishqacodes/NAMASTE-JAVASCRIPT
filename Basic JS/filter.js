// filter function is used to filter the value inside an array

const arr=[5,1,3,2,6];

// filter the odd value 
function isdd(c)
{
    return c%2;
}
const outpudt=arr.filter(isdd); 
const output=arr.filter((x)=>x%2); 

console.log("Filter odd : ",output);

// chaning of map and reduce
const users=[
    {firstName:"Siddhant",lastName:"kr",age:23},
    {firstName:"tanishqa",lastName:"sharma",age:43},
    {firstName:"mishal",lastName:"shahari",age:44},
    {firstName:"Siddhant",lastName:"kr",age:23},
];

const ouuut=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(ouuut)