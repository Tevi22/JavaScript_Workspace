/*
Problem Statement:
Write a JavaScript code to formulate date for a specified date after given 'n' number of days.

Sample Input:16th Jul, 2018 and n=30

Sample output:15th August, 2018

Note: Don't forget to account for leap years!

(Hint: Refer the Date Operations tables in the Quick Reference section.)
*/

let n = 29

let dateObj = new Date(2018,07,16)
let leapYear = n - 1;

console.log(leapYear)
console.log(dateObj+leapYear)// Output: