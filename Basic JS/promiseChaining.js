const cart = ['shoes', 'pant', 'kurta'];

// const promise = createOrder(cart) //orderId

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    // we also add any catch here  
    .then(function (orderId) {
        return prceedToPayment(orderId);
    })
    .then(function(paymentInfo)
    {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("no matter What happend above ,I will be difinelty called")
    });

// catch is used to (handle error) attach failure callback if the promise /callback fail 
// then this function is invoked

// Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // this is thw way to create a promise 
        // Promise is constructor
        // this function createoder
        // validating cart
        if (!validateCart(cart)) {
            const err = new Error("Cart  is not valid")
            reject(err);
        }
        // logic of creating prder
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
            // resolve(orderId);
        }
    });
    return pr;
}

function prceedToPayment(orderId){

    return new Promise(function(resolve,reject)
    {
        resolve("payment succesfull");
    });
}

function validateCart(cart) {
    return false;
    // fir rejec the promise mark false
}