const cart = ["shoes", "pants", "iphone"];


// 1. create order
// 2. proceed to payment
// 3. show order summary
// 4. update wallet

// if order is created thenonly  we have to reach the proceed Payment
// callback can come into role
api.createOrder(cart, function () {
    api.proceedPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet()
        });
    });
    // here we gave the control of our code to createOrder api 
    // and we blinding trusting the api we doesnt know what is written in that 
    
});



// when we have a large code and so many api's and api are dependent on after the other 
// so we falling into callback hell

// callback hell: one callback inside another call back another random thing happening makes the call back hell
//  code start grow horizontaly instead of growing vertically
// this type structure is also known as Pyramid of Doom 


// Inversion of control
// it is an another problem while using callback 
// inversion of control is like when u loose the control of ur code when we using callback 






// 