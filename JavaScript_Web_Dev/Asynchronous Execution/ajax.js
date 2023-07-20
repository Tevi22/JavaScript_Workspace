/*

How can we make JavaScript asynchronous?
JavaScript is single threaded programming language which means that all code will be executed in sequence. Thus if a code takes 2 seconds to run, 
the browser will freeze for those 2 seconds. This causes a bad user experience. Thus, we have to execute code asynchronously whenever it takes a longer time to execute.

The DOM API gives us a facility to execute code asynchronously. 
This API gives us a method called setTimeout(functionName,timeInMilliseconds) which allow us to execute a function after a specific time delay.
*/

function display(){
    console.log("Let's go to Trip");
};
console.log("Before");
setTimeout(display,3000)
console.log("After");

/*
As the function display is invoked asynchronously, it will print After before printing "Let's go to Trip".
The console.log ("After") does not wait for the previous step to complete.

​​​​​​​AJAX
When we click on the submit button in a page, the entire page refreshes and causes a time delay when the request is sent to the server.
AJAX is a technique for sending request to the server without involving a page refresh. Just like setTimeout() AJAX techniques are also asynchronous in nature. 
That means, while the request is sent to the server, the page will not freeze till we get the response back.

Steps in AJAX
Our JS code can contact the server and send/fetch data. To perform this operation asynchronously we can use the XMLHttpRequest API.

The JavaScript code can asynchronously connect to a server by using a new XMLHttpRequest() object. This is also called as AJAX.

The four steps for using AJAX are:

1. Create new XMLHttpRequest()
2. Open a URL using the request object
3. Mention what should happen when a response is received
4. Actually send the request

*/

var xhr = new XMLHttpRequest(); // 1.Create request object
xhr.open('GET', url); // 2.Open the URL
xhr.onload = function () { // 3.Mention code to run when response is received
   console.log("The response from server is "+xhr.responseText);
};
xhr.send(); // 4.Send the Request