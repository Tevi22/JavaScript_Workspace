/*

Web API
Apart from 3rd party API's the environment in which the JS code runs has its own set of API's. For example, Node has it's own set of API's and the browser itself has it's own set of API's.

The API provided to our JS code by the browser is called as Web API. The Web API allow us to interact with the browser through our JS code. For example, we can change the width of the browser, load a different page in the address bar, close the browser, send a browser notification, etc through the Web API.

In fact console.log() is actually not part of the language. It is provided by the browser as part of its API. It is through that API we are able to interact with the browser and print something on the browser's console.

There are many Web API. Some of which we will cover in the course are:

1.XMLHttpRequest
2.DOM
3.Notification
4.Storage

Note: Since these API's are provided by the browser, they will not work in Node

Security concern:
Dynamically executing code is security-sensitive:Some APIs enable the execution of dynamic code by providing it as strings at runtime.
These APIs might be useful in some very specific meta-programming use-cases.
However most of the time their use is frowned upon as they also increase the risk of Injected Code.
Such attacks can either run on the server or in the client (example: XSS attack) and have a huge impact on an application's security.

*/