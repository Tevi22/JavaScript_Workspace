/*
Exception Propagation:

In JavaScript, all errors are of type error object.
These objects carry the information related to the error, including the stack trace.

Whenever an exceptional event occurs, the browser environment generates the error object and throws it. 
The moment an error object is thrown, further execution of program is stopped. 
If it error is not handled, then the error will be propagated to the calling environment.

The calling environment can be either a calling method, or the browser.
*/

function validateName(name){
    if(name.Match(/[\$\#]/)){
        console.log("Input is invalid");
        return false;
    }
    else {
        console.log("Input is valid");
        return true;
    }
}
function validate(){
validateName("Hello");
}
validate()

/*
Exception propagation steps:
In the above scenario, an error is generated inside validateName() method 

1. Since validateName() method doesn't handle it, the error is propagated back to its calling environment, which is the validate()
2. Since validate() method doesn't handle it, the error is propagated back to its calling environment, which is button click event
3. Since the error is not even handled in button click event, it is propagated back to its calling environment i.e. browser

When the browser receives the error, it shows the stack trace in the console and terminates the program.
Hence, the error started from validateName(), propagated to validate() and then propagated back to the browser.

Error Object:

As we saw in the console, the Error object contains three properties:

1. name: defines name/type of the error. For this example the error name is 'TypeError'.
2. message: is a short description about the error. In our case, it is 'name.Match is not a function', because Match() function with uppercase 'M' does not exist.
3. stack: A full stack trace of the error, with error name, error message, file name, method, line information about where the error has occurred. Here, the last three lines starting with "at" is the stack trace.

There can be different values for the name property, which signify different Error objects thrown during the execution of JS program.

Here are some built-in error objects in JS
1. EvalError: Is an instance of Error which represents than an error occurred regarding the global function. Example: eval().
2. InternalError: Is an instance of Error which represents an internal error in the JavaScript engine.  Example : "too much recursion".
3. RangeError:Is an instance of Error which represents than an error occurred when a numeric variable or parameter is outside of its valid range.
4. ReferenceError: Is an instance of Error which represents than an error occurred when de-referencing an invalid reference.
5. SyntaxError: Is an instance of Error which represents than an error occurred while parsing some input in eval() or in JSON.parse().
6. TypeError: Is an instance of Error which represents than an error occurred when a variable or parameter is not of a valid type.
7. URIError: Is an instance of Error which represents than an error occurred when encodeURI() or decodeURI() are passed with invalid parameters.
*/

/*
Try-catch block:
Error handling is important, as unhandled errors can lead to abrupt termination of the program. These errors can be handled by using try-catch block.
*/

function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        // code for Handling error
        console.log(error.message);
    }
}
validateName("Josh")

/*
The code that can throw an error should be enclosed inside the try block. A try block should be immediately followed by a catch block.

A catch block is an error handler which can handle the error. 

The error object thrown from try block will be passed as parameter to catch block.

In the above case, when validateName() throws an error because of wrong method name, the error object is created and thrown. This error object is caught by the catch block and performs appropriate handling of error, here we have just logged the message present in the error object.

Once the error object has been thrown, the next immediate lines in the try block will not be executed.

Conditional Statements in a Catch block:
Now that we have seen different types of Errors, can we handle each of these errors in separate manner? The answer is no. This is because JavaScript is dynamically typed language, so we cannot specify the different catch blocks for each error instance.

Instead, which we can use some conditional statements inside the catch block.
*/

function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        if (error instanceof TypeError)
            console.log("Type Error Occurred");
        else if (error instanceof RangeError)
            console.log("Range Error Occurred");
        else if (error instanceof SyntaxError)
            console.log("Syntax Error Occurred");
        else
            console.log("Some other Error Occurred");
    }
}
validateName("Josh$");

/*
Here, once an error is thrown in the try block, it will be handled by the catch block. Inside the catch block, we are checking the type of the error object by using instanceof operator and handling them separately.
*/

/*
Finally block:
An error inside a try block causes the rest of the code to be skipped. This might lead to some important parts of the code not being executed.

There may be some important code which must be executed in all the conditions.

For example:

1.Closing the database or file connection
2.Releasing the memory allocated for objects

Hence, keeping these such code inside the try block cannot guarantee their execution.

In such situations, the finally block plays an important role. The finally block ensures that the code will be executed, irrespective of whether an error has occurred or not.

Observe how we have implemented try-catch-finally for validateName() function.
*/

function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
            console.log("Error Occurred");
    }
    finally{
        console.log("Cleaning up resources");
    }
    //A try block should be always followed by either a catch block or a finally block or both.
}
validateName("josh$");

/*
Throwing of Error:
Apart from the code throwing errors, we can also programmatically create our own errors and throw them to change the flow of execution.

This can be done by creating a new object of Error class and passing our own name and message to it.
*/

//Example 1.

var err = new Error();      //You can pass the message or not it is optional
err.name = "InvalidEmailError";
err.message ="Invalid Email";
throw err;

//Example 2.

function validateName(name) {
    try {
        if (name.match(/\$/)) {
              throw new Error("Name should not contain $");
        }
        else {
            return true;
        }
    }
    catch (error) {
            console.log(error.message);
    }
    finally{
        console.log("Cleaning up resources");
    }
}
validateName("Hello$");

