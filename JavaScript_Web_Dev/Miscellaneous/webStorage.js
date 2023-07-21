/*

What is web storage?

Typically, the clients send some information to the server along with the request, which identifies them. This is done by using technologies like sessions, cookies, URL encoding, etc. But in all such cases, we have to pass information along with requests to the server, thus increasing the load on the server.

HTML5 introduced a concept called Web Storage API.

Web Storage is basically a local storage space in the clients hard disk. The data is stored in the clients' local storage rather that being sent to the server. 

For example, if you add items to a cart on a shopping app, they can be stored in the local storage rather than being sent to the server.

Thus, when the page loads again, the data can be retrieved from the local storage itself, thereby reducing load on the server.

​​​​​​​Web Storage API:

Featues of Web Storage:
Large amount of data can be stored – Atleast 5MB data can be stored in client machine.

Reduced network overhead – Stored data is never send back to web server. Hence, there are no additional HTTP request-response cycle.

Secure – Each domain is given a part of memory in client's machine. Webpages from same domain can share data.  One domain cannot override/access data of another domain. Hence, it is ensures data security.

 
How to use Web Storage:
We can store the data using web storage in two ways:

1. For particular session i.e. session storage: For session storage, sessionStorage object is used
2. Across sessions i.e. local storage: For local storage, localStorage object is used

Both these objects are created by JS runtime engine of browser.


Web storage API provides following four methods for managing data:

Web storage methods and their description
Method	                            Description
setItem(key,value)	                Stores value associated with the key
getItem(key)	                    Retrives value associated with the key
removeItem(key)	                    Removes value associated with the key
clear()	                            Clears all (key,value) pair
*/