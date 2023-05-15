/*
    
    Problem Statement:
    1. Simulating a periodic stock price change and displaying on the console.

    Approach to the solution:
    1. Create a method which returns a random number - use Math.random, floor and other methods to return a rounded value.
    2. Invoke the method for every three seconds and stop when the count is 5 – use the setInterval method.
    3. Since setInterval is an async method, enclose the code in a Promise and handle the response generated in a success callback.
    4. The random value returned from the method every time can be used as a stock price and displayed on the console.
*/
//Creating object to return random number

function randomNum() {
    return Math.random(Math.floor());
};