/*
Problem Statement:
Write a JavaScript code to process name as the sample below.

Sample Input: Rama Krishna Narayan

Sample Output: R. K. Narayan

(Hint: Refer the String Operations tables in the Quick Reference section.)
*/

let text = 'Rama Krishna Narayan';

let part1 = text[0]
let part2 = text[5]
let part3 = text.slice(13,19)

console.log(part1 +". " + part2 + ". " + part3) // Output: R. K. Narayan