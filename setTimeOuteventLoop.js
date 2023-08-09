console.log("start");
setTimeout(function an(){
    console.log("hey i am a timmer");
},5000);

console.log("end");

// block main thread
let startDate=new Date().getTime(); // give exact time in milliseconds
console.log('Start Date : ',startDate);
let endDate=startDate;
console.log('Start Date : ',startDate);
while(endDate<=startDate+10000){
    endDate=new Date().getTime();
}
console.log("While expire here");