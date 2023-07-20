let value;
function check(val) {
    console.log(val);
}
function getTrip() {
    setTimeout(function () {
        value = "Let's go to Trip";
    }, 1500);
}
getTrip();
check(value);// undefined

/*
The above function check() will print undefined because line 11 will not wait for line 6-8 and line 6-8 takes 1.5 seconds to execute.

What is Callback?
A callback is a function which will get executed automatically after some other function gets executed completely. Thus, it is also called as call-after.

In fact, we have already been looking at callbacks since we started discussing about setTimeout.
*/

function display(){
    console.log("Let's go to Trip");
};
setTimeout(display,3000);

/*

Here, we are not invoking display() anywhere! display is being invoked automatically by the setTimeout. 
We can see that display() is invoked or called after 3000 milliseconds. Thus here display is called as a callback function. 
Callback functions are those functions which are passed as a parameter to another function and invoked after the other function has completed it's execution.
*/

/*
Asynchronous Callback:
Let us use callback to address the problem of dealing with data in an asynchronous situation. 

Consider the below code again:

*/

let value;
function check(val) {
    console.log(val);
}
function getTrip() {
    setTimeout(function () {
        value = "Let's go to Trip";
    }, 1500);
}
getTrip();
check(value);// undefined

//This can be modified using callback as shown below:

let value;
function check(val) {
    console.log(val);//"Let's go to Trip";
}
function getTrip(callback) {
    setTimeout(function () {
        value = "Let's go to Trip";
        callback(value);
    }, 1500);
}
getTrip(check);

/*
Here we are passing check function as a callback to the getTrip() function. 
Now check() will be invoked inside setTimeout() instead of returning the data. 
Typically third party libraries expect you to pass a callback and they will invoke your callback after they have completed the task.
*/

/*

Callback Hell:
What if a callback has a callback? While doing multiple asynchronous operations, the callback get nested to each other which leads to callback hell.

Callback function can not be chained together which leads to nested callback while calling it multiple time which leads to callback hell.

To overcome the problem of callback hell, we use promise which we will see next.

*/
