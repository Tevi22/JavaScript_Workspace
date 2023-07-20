/*

Unit Testing:

Unit testing involves the execution of a JavaScript function to evaluate if the output returned is the expected one. 
It helps us test if one or more features of a JavaScript function are working as per expectation. In general, these features indicate the extent to which the JavaScript application being tested:

1.meets the requirements that guided its design and development,
2.responds correctly to all kinds of inputs,
3.achieves the general result its stakeholders desire

Automated Testing:

JavaScript is a powerful programming language that has no compiler and no static type-checking in the code. As JavaScript developers we continuously write new code or extend the existing code. 
In either of the scenarios, if code fails, as developers we can see it only on the browser during execution and not before that.

To debug or write endless console statements in our code are manual ways of testing the JavaScript code. This process is too slow. 

We should have automated ways of finding the bug in the code and avoid the chaotic and time consuming debugging. 
Automated testing will enable us to programmatically check or test the functionality of our code before we execute it and watch it fail.

In this course we will use Jasmine unit testing framework.
*/

//Jasmine Testing:

function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}

/*
To test this code, we have to follow the below steps:

Step 1: A test suite should be created
Step 2: Test specs should be created for all the possible scenarios
Step 3: Test specs should be created in order to check whether the result variable is defined or not
Step 4: Test suite should be executed with the help of Karma

Test suite:
A test suite is a grouping of relevant test cases which are executed together. We can create a test suite with the help of built-in function describe().

describe(title, function(){})

1.It is a global Jasmine function
2.It helps in defining the test context by creating a new test suite
3.It accepts two parameters:
    a.A title (of string type) or name of the test suite
    b.A function containing specs which belong to this suite
*/

describe('TotalTravelFare calculation Suite:',function(){
});

/*
Test spec:

A test spec is the actual test case. Now we will write spec inside the suite, with the help of Jasmine function "it".

it()

1.It is also a global Jasmine function
2.It helps translate the acceptance criteria into Jasmine spec
3.It accepts two parameters:
    a.Title or name of the test suite
    b.Function containing spec code
*/

describe('TotalTravelFare calculation Suite:',function(){
    it('Test Case 1: Inputs are correct',function(){
       expect(totalTravelFare(1000,20)).toEqual(1200);
    });
})

/*
expect()
    1.It is a global Jasmine function that helps in writing the assertions.
    2.It takes only one parameter: Actual value to be tested

 toEqual()
    1.Matcher is used to compare the actual and expected output
Now we will see a simple demo, where we can create a simple test case and run it using Karma test runner.

Matchers:

Matchers are Javascript functions which are used to compare the expected and the actual output in any test case.

The table below shows the different Jasmine matchers along with their description
Method	                                                      Description
toBe(expected)                      expect the actual value to be === to the expected value
toBeDefined()                       expect the actual value to be defined. (Not undefined)
toBeFalsy()                         expect the actual value to be falsy
toBeTruthy()                        expect the actual value to be truthy.
toBeGreaterThan(expected)           expect the actual value to be greater than the expected value.
toBeLessThan(expected)              expect the actual value to be less than the expected value.
toEqual(expected)                   expect the actual value to be equal to the expected, using deep equality comparison.
toMatch(expected)                   expect the actual value to match a regular expression
toThrow(expected)                   expect a function to throw something

Karma - a test runner:
So far we have just written some test cases with .js extension. 
To run these test cases we need to install jasmine and karma. Karma is a test runner tool. 
These tools need to be downloaded and installed. Node has a something called npm ( Node Package Manager ) which helps us install such tools.

Type the below commands in the vscode terminal:
    npm install -g karma jasmine-core

Karma is:

1.A tool that spawns a web server which executes the source code against the test code for each browsers connected.
2.When executed, it automatically captures the browser specified by the developer during Karma configuration.
3.It then displays the results on the command line.
4.It watches all the files specified within configuration file and if there are any changes, it will trigger the corresponding spec again on the browser.

In the next page, we will see a video on how to run the jasmine test cases using karma.
*/
