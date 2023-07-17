/*

Write a JavaScript program to display the current day and time in the following format.  


Sample Output : 
Today is : Tuesday. 
Current time is : 10 PM : 30 : 38

(Hint: Refer the Date Operations tables in the Quick Reference section.)
*/

let today = new Date("2023-07-17");
let currentDay = today.getDay();
let dayNames = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let currentTime = 
'Current time is : ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log('Today is : ' + dayNames[currentDay]);
console.log(currentTime);