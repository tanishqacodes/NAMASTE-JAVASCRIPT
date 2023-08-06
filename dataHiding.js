function counter(){
    var count=0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}
var counter1=counter();
counter1();
// this count1 increase the count by 1
var counter2=counter();
// if we makw one more coutn2 function then we got a one another fresh counter (new)
counter2();


// ------------------------------------------------------------------------------------------
// this is not a good way to make a counter 
// above code is not scalable 
// we use constructor function to make separate increment and decrement function

// ====
// ----------------------------------------------------------
function Counter(){
    var count =0;
    this.incrementCounter=function(){
        count++;
        console.log(count);
    }
    this.decrementCounter=function(){
        count--;
        console.log(count);
    }
}
var newCounter1=new Counter();

// here new is used due to construtor function
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.decrementCounter();
newCounter1.decrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.incrementCounter();
newCounter1.decrementCounter();
newCounter1.decrementCounter();
newCounter1.decrementCounter();
newCounter1.decrementCounter();