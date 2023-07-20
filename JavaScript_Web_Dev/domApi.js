/*
DOM methods: 
Here are a few widely used DOM methods.

getElementById(id): It is used to access element by its id.

getAttribute("attributeName"): It is used to access the tag attribute of the DOM object.

 

DOM atttributes:
Few widely used DOM atttributes are as follows-

innerHTML: innerHTML is used to set or get the HTML content of the element.

innerText: innerText is used to set or get the Text content to element.

value: value is used to get or set value of the element.

checked: checked is used on checkbox and radio button. It is used to check either they are checked or not. If they are checked, it returns true else it returns false.

disabled: disabled is used to get or set the disabled status of the element. If disabled is set to true, then the element becomes disabled.

 

Some common methods associated with the window object are:

alert("message") - this will display an alert box with the given message

confirm("message") - this will display an confirm box with the given message

Since window is the top most object, we can ignore it in the code. 

For example

window.alert("Hello");
is the same as

alert("Hello");
 

One of the most common method associated with the document object is:

write("message") - this will overwrite the existing HTML content of the page with the message given

Event Handling
The user interacts with the HTML elements and each of these interactions is what we  call as an event. Each of these events have predefined event attributes which link the JS code to these events. Some of the important ones are:
 
Types of Event
Event	              Event Attribute	               Description
click	              onclick	                       The event occurs when the user clicks an HTML element.
load	              onload	                       The event occurs when the browser has finished loading the pages.
mouseover	          onmouseover	                   The event occurs when the user moves the mouse over an HTML element.
focus	              onfocus	                       The event occurs when an element gets focus
blur	              onblur	                       The event occurs when an element loses focus
keyup	              onkeyup	                       The event occurs when the user releases a key
 
The JavaScript code(called specifically as function) is written to respond to these events are called as event handlers.

Event Prevention
Sometimes, when an event occurs, we may want to stop its further behaviour. For example, we may want to stop a page from getting submitted, if the validations fail or we may want to prevent event bubbling from happening. In such cases if we use event.preventDefault() it will prevent the default behaviour of the event. 

Consider the below code.

<form onsubmit="display(event)">
        Username: <input id="usr">
        <button type="submit">Login</button>
        <div id="msg"></div>
</form>
<script>
    function display(e){
        if(document.getElementById("usr").value.length<6){
            document.getElementById("msg").innerText="Username must be atleast 6 chars"
            e.preventDefault();
        }
    }
</script>

The page submission will now not happen if the username is less than 6 chars. 
*/