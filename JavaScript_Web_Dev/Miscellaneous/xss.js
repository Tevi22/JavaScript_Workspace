/*
XSS Vulnerability-;
Responsive web pages handle information related to end user.
Example : username and password.

This type of information needs to be protected. Information assurance is the practice towards achieving the same.

-A vulnerability is a weakness of system which when exploited can reduce that system’s information assurance.

1. These vulnerabilities can give way to attacks with intend to access and manipulate application as well as sensitive information.
2. Hackers can exploit these vulnerabilities to extract user’s private data, like cookies or other session information.

One such vulnerability is Cross site scripting (XSS). It is one among the ten most critical web application security risks as per OWASP Top 10 – 2013.

Cross-Site Scripting (XSS) attacks are nothing but injecting an attack code on the client-side.

Let us learn when these vulnerabilities can occur.

XSS vulnerabilities example
XSS vulnerabilities may occur when :

1.Inputs provided to the web app are not validated
2.HTML encoding is not applied, then the browser interprets output as code

Consider the example below:
http://url/index.php?name=guest<script>alert('CSSAttack);doUnexpected();</scrpt>
                                                ^
                                              injected code  
 
The image consists of an URL consisting of validations as name = guest and the encoding part in the script tag within the URL itself which must be avoided.
 
These XSS vulnerabilities can be prevented by following the below rules:

1. Validation to filter out the user input. Then the browser interprets it as code without malicious content
2. Encoding escapes the user input only as data, not as code so that the browser interprets accordingly
*/