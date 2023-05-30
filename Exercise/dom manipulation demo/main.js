
// In order to see how each example works comment out the section of code you do not what to use
// Change Element Example Using Button


function changeElement() {
    // Get user input from the input field
    const userInput = document.getElementById('inputField').value;

    // Change the text of the output element
    document.getElementById('outputElement').innerHTML = 'Hi ' + userInput;
}


// Change Element Example Without using button
/*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("inputField2").addEventListener("input", function() {
        document.getElementById("outputElement2").innerHTML = this.value;
    });

});
*/
