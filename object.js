var a = {
    // firstname lastname age movies email are properties
    firstName : "Tanishqa",
    lastName : "Sharma",
    age : 18,
    movies : ['Dhoom','Sholay','Hum'],
    email : "hello@xyz.com",
    salary : function(){
        return 25000;
    },
    // salary & fullname are => method
    fullName : function(){
        return this.firstName+" "+this.lastName;  // to know reference of the object element
    },
    living : {
        city:"Allahabad",
        state:"Uttar pradesh",
        conutry : "india",
    },
};

// document.write(a);
console.log(a);
document.write(a.firstName);
document.write(a.movies);
document.write(a.movies[0]);
document.write(a.salary());
document.write(a.living.city);


var x = new Object();
x.firstName = "Ram";
x.lastName = "Kumar";
x.age = 38;

document.write(x.firstName);
document.write(x['age']);