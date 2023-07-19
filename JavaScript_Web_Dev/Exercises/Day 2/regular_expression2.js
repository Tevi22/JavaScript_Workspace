/*

ProblemStatement:
Write a pattern that matches e-mail addresses. Syntax: localpart@domain

Note: The local part ( The text before @ symbol ) contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.

Digits (0-9).

Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~

Character . (dot) provided that it is not the first or last character and it will not come one after the other.

*/

function matchEmail(string, pattern){
    if (string.match(pattern)){
        console.log('Matches the pattern')
    } else {
        console.log('Not matching')
    }
}

let string = 'JohnDoe.12#4@gmail.com'
let string2 = 'John.Doe12#4@gmail.com'
let regEx = /^[^\s@]+(?:\.[^\s@]+)*@[^\s@]+(?:\.[^\s@]+)+$/
/*
Let's break down the components of this regular expression pattern:

^: The caret symbol represents the start of the string.
[^\s@]+: Matches one or more characters that are not whitespace or @.
@: Matches the @ symbol literally.
[^\s@]+: Matches one or more characters that are not whitespace or @.
\.: Matches the dot . character literally. Since . has a special meaning in regular expressions, it needs to be escaped with a backslash \.
[^\s@]+: Matches one or more characters that are not whitespace or @.
$: The dollar sign represents the end of the string.
This regular expression pattern enforces a few basic rules for email addresses:

It should have a non-empty local part (characters before @).
It should have a non-empty domain part (characters after @ and before the dot .).
It should have a non-empty top-level domain (characters after the dot .).
However, it's important to note that email address validation can be complex and is subject to various standards and requirements. This regular expression pattern provides a basic level of validation but may not cover all possible valid email address formats.
*/
matchEmail(string, regEx);
matchEmail(string2, regEx);