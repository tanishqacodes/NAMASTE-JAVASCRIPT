// Promises are used to handle asynchronous operation in javascript


const cart = ["Smart watch", "shoes", "kutars"];

// create an order an give the order id
createOrder(cart, function (orderId) {
    proceedPayment(orderId);
});
// we pass the callback function to the createOrde api's


// ==================================================================================================
const promise = createOrder(cart); //when this line is excuted it return object with store the undefined value 
// after sometime code run it is assign with some specific value automaticallly



// promise is empty object with some data value in it 
// this createOrder return the promise and program will start excuting 



// once the data inside the promise object 
// this call back function which is  attach to the promise is automatically called

// (.then) fucntion help to attach the callback function to promis
promise.then(function (orderId) {
    proceedPayment(orderId);
});
// here we attaching the callback function to the promise object



createOrder(cart, function (orderId) {
    proceedPayment(orderId, function (payInfo) {
        showInfo(payInfo, function () {
            updatewallet();
        });
    });
});
// this is the example of call back hell 



const promis = createOrder(cart);



createOrder(cart).then(function (orderId) {
    return proceedPayment(orderId);
}).then(function (payInfo) {
    return showInfo(payInfo);
}).then(function (payInfo) {
    return updatewallet(payInfo);
})

createOrder(cart).then(orderId => proceedPayment(orderId))
    .then(payInfo => showInfo(payInfo)).then(payInfo => updatewallet(payInfo))