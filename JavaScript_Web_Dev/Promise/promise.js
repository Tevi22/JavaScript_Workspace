/*

Promise:
Just like in real life, a promise is an object that may produce a single value some time in the future. 

A promise can be:

1. resolved - promise succeeded
2. rejected - promise failed
3. pending - Hasn't fulfilled or rejected yet
*/

function getTrip(){
    return new Promise(function(resolve){
      setTimeout(function() {
        resolve("Lets go to Trip");
      }, 2000);
    });
  };

getTrip()

/*
In the above code, we are not returning the actual data. We are returning a promise of the actual data. 

Line2 says we are returning a promise. We can see that while creating a promise, we have to pass a function as a parameter. The code that will be executed in future is placed inside this function.

What is resolve in line4? Resolve is the data what we are promising. The above code says we are promising a string data in future, if everything goes well.


How to resolve a promise?
Even in real life, we promise about things that will happen in future. So when we create a promise in JS, we are in effect creating a data that will be available in the future, if everything goes well.

So how can we access this data in future? Well, a promise can be handled using then method. The general
*/

// Syntax

promiseObject.then(
    function(futureData){
    ....
})

// Example

getTrip().then(
    function(futureData){
        console.log(futureData);
    }
);

/*
Resolve and Reject in a Promise object:

Resolving a promise is valid only if nothing goes wrong. What if something goes wrong and we are not able to keep the promise?
Then we need to reject the promise instead of resolving the promise. So instead of returning the promised data, we can return an error.
In any new Promise we can define resolve and reject both.
*/

//Syntax

new Promise (resolve, reject) { }

// Example

function getTrip(location) {
    return new Promise(function(resolve, reject) {
      if (location == "ooty") {
          resolve("Trip to " + location);
      } else {
        reject(Error("Some error occured"));
      }
    });
}

//Now, let's call the above function. Here, promise will be resolved.

getTrip("ooty").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error);
    }
);
// Trip to ooty

//In this call, condition will fail and promise will be rejected.

getTrip("coorg").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error.message);
    }
);
// Error: Some error occurred

/*
Promise Chaining in Javascript:

Sometimes in real life, we make multiple promises which are interdependent on each other. Only if we fulfill the first promise, 
the second promise even makes sense. If we fail to keep the first promise, then the second promise cannot be fulfilled.

The same is true in JS also. For example, I have two promises: one to book flight and the other to book hotel. 
Each promise is resolving the amount of money spent for the booking
*/

function bookFlight(){
    return new Promise(function(resolve){
    setTimeout(resolve(5600),2000);
    })
}

function bookHotel(flightPrice){
   return new Promise(function(resolve){
   setTimeout(resolve(7000+flightPrice),1000);
   })
}

/*
We want the bookHotel Promise to be resolved only after the bookFlight Promise is resolved and calculate the total price. How can we do this? 

Resolving promise chaining:

To ensure that the second promise is resolved only after the first promise is resolved, we can chain these promises together as shown:
*/

function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}

function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}

bookFlight()
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })

//The promise returned by the first then is chained and resolved in the next then.

/*
Rejecting chained promises:

What will happen if any of promises fail in the chained promises?

Promises after the failed promise will not be resolved. It will throw an error and promises in chain will not be executed after it.
*/

function bookFlight(airline) {
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            setTimeout(resolve(5600), 2000);
        } else {
            reject(Error("Flight can not be booked"))
        }
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
bookFlight("indigo")
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
    .catch(e => console.log(e.message))

//The promise returned by the first then will throw error.    

/*

Usage of Async/Await to handle promises:

We can simplify chaining of promises using a concept called as async-await.

Consider the below code which performs some asynchronous operations.

*/

function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
function getTotal(){
bookFlight()
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
}
getTotal()

/*
We can simplify the promise handling using async await. It involves two steps:

1.Add async keyword in front of getTotal(). 
2.Instead of using .then(), add await keyword in front of method invocation and store the returned value.
3.Copy and replace the getTotal function with below given code.
*/

async function getTotal(){
    var flightData=await bookFlight();
    var cumulativeData=await bookHotel(flightData);
    console.log(" Total is " + cumulativeData) 
}

/*
We can see how this has simplified promise chaining. Whenever we have await, the code will wait for the promise to be resolved/rejected. 

Security Concern:

Await should only be used in promises:The point of await is to pause execution until the Promise's asynchronous code has run to completion.
With anything other than a Promise, there's nothing to wait for. This rule raises an issue when an awaited value is guaranteed not to be a Promise.
*/