//JSON - JavaScript Object Notation

/*
What is JSON?
When two different programs want to pass data to each other, 
they need a commonly accepted format of passing that data. 
There many formats available like plain text, xml, json, etc.

JSON stands for JavaScript Object Notation. 
JSON is a way of formatting the text in such a way that it looks like a JavaScript literal object. 
*/

// Object Literal

let empObj = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
}

// JavaScript Object Notation

let empJson = '{"name":"John","empNumber":1001,"emailId":"John@gmail.com"}'

/*
The keys in JSON string must be a string enclosed withing quotes. 
The values can be any valid JavaScript value: null, number, string, etc. 
It can have arrays as well as other JSON objects as values. 
JavaScript provides a standard built-in object called JSON which has methods for parsing and generating JSON data.
*/

// parse(): This function is used to convert JSON string into an JavaScript object

let json = '{ "firstName":"John", "lastName":"Doe"}';
let nameObj= JSON.parse(json);
// Will convert JSON string into an JavaScript object
console.log(nameObj.firstName +" "+ nameObj.lastName );

// stringify(): This function is used to convert object to JSON string

let jScores = { "Java": 70, "JavaScript": 80, "CSS": 30 };
//will convert object to JSON string
let tScores = JSON.stringify(jScores);
console.log(typeof(jScores));// returns Object
console.log(typeof(tScores));// returns String
