/*
Write a JavaScript function checkDate() to check if a given date is in the correct format or not.

Correct date format: "MM-DD-YYYY" (for example: 03-18-2018)

If the date format is as above, the function should print true else it should print false.

Sample Input: 19-12-1995

Sample Output: False

(Hint: Refer the Date Operations tables in the Quick Reference section.)
*/

function checkDate(datestring) {

    let dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

    if (dateFormat.test(datestring)) {
        let dateParts = datestring.split('/');
        let day = parseInt(dateParts[1], 10);
        let month = parseInt(dateParts[0], 10);
        let year = parseInt(dateParts[2], 10)

        if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 0) {
            return true
        } else {
            return false
        }
    } 
}

let input = '13/17/2023'
let isCorrectFormat = checkDate(input);

console.log(isCorrectFormat)