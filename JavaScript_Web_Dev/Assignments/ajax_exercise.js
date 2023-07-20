/*
Create a simple XMLHttpRequest, and retrieve data from a pets.json file and display it in the browser.

Note: The pets.json file contains the below json object
*/

function getPets() {
    let url = "./pets.json"
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        document.getElementById("pets").innerText = xhr.responseText
    }
    xhr.send();
}