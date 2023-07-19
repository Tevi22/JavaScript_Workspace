/*

The syntax is:

objName={
   propertyName:value,
   propertyName:value,
   ...
   methodName(){
   },
   methodName(){
   }
}
*/

// Example 1

let empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com",
    swipeIn(){console.log("Swipe In by "+this.name)}
};

// How to access the properties of an object.

console.log(empOne.empNumber);
empOne.empNumber=1002;
console.log(empOne.empNumber);
empOne.swipeIn();

/*
object.property

To get the value: let name = empOne.name;
To set the value: empOne.name = "Hello";

object[property]

To get the value: let name= empOne["name"];
To set the value: empOne["name"] = "John";

Note: object[property] access should be used mainly when 
the property names are having space, hyphen, or one that starts with a number.
*/

// Iterating an object

// For in
// The for..in loop iterates over the object and gives the property values of the object. For example:

for(let property in empOne){
    console.log(empOne[property]);
} //Output Property names: name, empNumber, emailId

// To get the values of property
console.log('property names:')
for (let property in empOne) {
    console.log(empOne[property]);
}//Output: John, 1001, John@gmail.com

// object.value();
// Object.values() will give all the values of an object in an array. For example:

console.log(Object.values(empOne));//Output: ['John', 1001, 'John@gmail.com']

/* Object Destructuring 
We can destructure an existing object into variables. If the variable is prefixed by 
three dots (...) then it is called a rest variable and can store more than one property. 
Note that this feature is the latest ES2018 feature and is not yet supported by any browser.

*/

let { name, ...rest }  = empOne
console.log(name)
 // 'John'
console.log(rest) 
/*{
    empNumber : 1001,
    emailId : "John@gmail.com"
}*/
