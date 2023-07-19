/**
 Regular Expression
Regular Expression or regex is basically a sequence of characters indicating a pattern. With the help of this pattern, 
we can search or match with other strings which follow the pattern indicated.

We will now see how we can validate the name using regular expressions. 
Let's say that the name must not have $ symbol in it. Here is the implementation of the validateName() function.

*/

function validateName(name){
    if(name.match(/\$/)){
        return false;
    }
    else {
        return true;
    }
}

//The sequence of characters /\$/  is an regular expression. The regular expression used in the above code indicates "any character which is $"
//When a regular expression is passed as a parameter to a match function, it checks if the pattern is present in the given string. If found the match function returns an array, else null.

/*
Parts of Regular Expression

Three parts of Regular Expression :
1. Meta characters
2. Quantifiers
3. Pre-defined classes (A pre-defined group of meta characters)

Steps to create a RegEx

Step 1: Create a regex pattern

A pattern is a series of characters that we want to search in the given test-string. Anything present in between '/' and '/' will become a pattern which can be used on a test-string.

For example, /hello/ will check if the sequence of characters, in this case, h e l l o are present in the specified order, anywhere in the given string to be tested.


                  Regex pattern
This regex will match	   This regex will not match
"helloworld"	           "Hello" (Regex is case sensitive.Hence 'H' is
                            not as same as 'h')

"hhellooooooo"	           "helllo" (there is an extra l)
"hello wolrd"	           "h ello"(there is an extra space between h and e

Step 2: Use meta-characters like [], ^, $

A meta-character is a character that has a special meaning (instead of a literal meaning)
The meta character [] indicates a single character.
For example, /h[abc]llo/ matches a single character present inside brackets.

            Examples of meta-characters
This regex will match	           This regex will NOT match
"hallo"	                           "hello"(h is not followed by either 'a' or 'b' or'c'
"hbllo"	                            "habllo"( [] a single character substitution. Hence eventhough h is followed by 'a' the subsequent characters should be "llo" 

We also have [^abc] which will match any single character except the ones given inside brackets.
Hence, the pattern /h[^abc]llo/ will match "hello", "h!llo", "h6llo" but not "hallo"

Step 3: Use quantifiers like +, *, ? and {n}

Quantifier are symbols which specify the frequency at which a character can appear.
For example + quantifier matches the preceding element one or more times. For example, /c[a]+r/ checks if there is at least there is one 'a' after c.
This table consists of two columns with a set of values that matches and do not match the pattern. In the first column we have car,caar,caaar which matches the string as it has atleast 1 'a' following 'c' while in the second column we have 'cr' and 'cra' which do not matches the pattern as it do not have the letter 'a' following the letter 'c'.

                Examples of Quantifiers
This regex will match	       This regex will NOT match
'car'	                       'cr' (there should be atleast one 'a' after 'c')
'caaar'	                       'cra' (there should be atleast one 'a' after 'c')
'caar'	                       'cr'

Meta Characters

Meta Character	                             Description	                                                                                                                       Example
 [ ]	                   Bracket expressions create a character class to match a single character within the brackets.'-' can be used to specify a range	                      [xyz]matches 'x','y,'z'.[a-z] matches any letter from 'a' to 'z'
.	                       Matches any single character, except a newline. Inside a bracket expression, it becomes a real dot.	                                                  b.t matches "bat", "bRt","b8t" etc.
[^]	                       Matches a single character that is not within the brackets.	                                                                                          [^xyz] matches 'a','6' etc.
|	                       "or" expression o match alternatives	                                                                                                                  bat|cat matches "bat" or "cat"
()	                       Groups expressions to form sub expressions. Also used to capture groups	                                                                              Ma(nn|tt)er matches "Matter" or "Manner"
^	                       which specifies the beginning of the string	                                                                                                          ^ an matches "ant", "ankle".Does not match "man" "plan"
$	                       which specifies the end of the string	                                                                                                              an$ matches "man","plan". Does not match "ant","ankle"

Quantifiers
Meta Character	          Description	                                                         Example
?	                      Matches the preceding element zero or one time	                     Ba?it matches "Bait" and "Bit"
*	                      Matches the preceding element zero or more time	                     10*1 matches "11","1001"etc
+	                      Matches the preceding element one or more time	                     10+1 matches "101","10001" etc
{m}	                      Matches the preceding element exactly m times	                         10{4}1 matches"100001"
{m,}	                  Matches the preceding element m or more time	                         10{3,}1 matches "10001","100001"etc
{m,n}	                  Matches the preceding element  minimum m times and maximum n times	 xy{2,3}z matches "xyyz" and "xyyyz"

Predefined Classes
Meta Character	                         Description	                                      Alternative
\w	                                     Alphanumeric characters and the underscore	          [A_Z a-z0-9_]
\W	                                     Non-word characters	                              [^A_Z a-z0-9_]
\d	                                     Digits	                                              [0-9]
\D	                                     Non-Digits	                                          [^0-9]
\s 	                                     Whitespace characters	                              [\t\n\f\r]
\S	                                     Non whitespace characters	                          [^\t\n\f\r]

Escaping characters that have special meaning :
To escape any characters which has special meaning just prefix it by '\' . For example, \$ indicates escape the special meaning of $ and treat it as a regular character.
 
*/

//Example

function validateName(name,pattern){
    if(name.match(pattern)){
        console.log("match found");
    }
    else {
        console.log("match not found");
    }
}
var name = "$John";
var regEx = /\$/;    //check for $ character in the name"
validateName(name,regEx)

/*

var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
Let's break down the components of this regular expression pattern:

^: The caret symbol represents the start of the string.
\d{2}: \d matches any digit character, and {2} specifies that we expect two consecutive digits.
\/: Matches the forward slash character / literally. Since / has a special meaning in regular expressions, it needs to be escaped with a backslash \.
\d{4}: Similar to \d{2}, this matches four consecutive digits.
$: The dollar sign represents the end of the string.
So, when you use this regular expression pattern, it will match a string only if it exactly follows the dd/mm/yyyy format. The ^ and $ anchors ensure that the entire string is matched from start to end, preventing partial matches.

Here's an example of how to use this regular expression pattern to check if a given date string is in the dd/mm/yyyy format:

javascript

var dateString = '17/07/2023';
var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
var isValidFormat = pattern.test(dateString);

console.log(isValidFormat); // Output: true
*/