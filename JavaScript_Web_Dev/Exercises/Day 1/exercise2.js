/*
Problem Statement:
Write a function, check_palindrome() to check whether the given string is a palindrome or not. The function should return true if it is a palindrome else it should return false.

Assume that all the letters in the given string are all of the same case. 
Example: MAN, civic, WOW etc.

Note: Initialize the string with various values and test your program. 

(Hint: Refer the String Operations tables in the Quick Reference section.)
*/

let text = 'civic';

let check_palindrome = () => {

    let splitString = text.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');

    if (text == joinString) {
        return true
    } else {
        return false
    }
}

check_palindrome();