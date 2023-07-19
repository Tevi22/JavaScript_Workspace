/*
Regular Expression Assignment
ProblemStatement:
Write a JavaScript program to search a date within a string.

Sample Input: "Albert Einstein was born in Ulm, on 14/03/1879."

Sample Output:14/03/1879.
*/

function searchString (string, pattern) {
    // Use the match method to find a match of the pattern in the provided string
    const match = string.match(pattern)
    if (match) {
        console.log('Match found!');
        //Extract the match date from the match array
        const matchedDate = match[0]
        //Print the matched date
        console.log('Date: ', matchedDate)
        

    } else {
        console.log('Match not found');
    }

}

const string = 'Albert Einstein was born in Ulm, on 14/03/1879.';
const regEx = /\d{2}\/\d{2}\/\d{4}/;
searchString(string, regEx); //Output: Match found! Date: 14/03/1879