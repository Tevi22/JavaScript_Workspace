/*
Notification API
We can create desktop notifications in JavaScript using the Notification API

Showing desktop notification involves 2 steps:

 

Step 1: User needs to grant permission to website for displaying notifications. In order to request the permission from the user requestPermission() 
of Notification object can be used as show below:
*/

Notification.requestPermission()

/*
Step 2: Create a notification.
In order to create notification, we need an object of Notification which can be created as shown below:
*/

new Notification(title,options)

// Finally we can create a notify() function for desktop notifications combining both step 1 and step 2 as shown below:

function notify(){
    Notification.requestPermission();
    if(Notification.permission === "default"){
        alert("Please grant permission");
    }
    else {
        var notify = new Notification("New Mail",{body:"You have 1 unread email"});
    }
}

/*
Properties of Notification object:
body:

Defines notification message

permission:

It is a static property of Notification interface, which represent current permission to display notifications.

Possible values for permission are denied,granted,default  ( the user choice is unknown so that browser will act as if the value is denied )

As a web developer, whenever you are developing a web-application that is supposed to notify user upon receiving updated data, you should use Notification API.
*/