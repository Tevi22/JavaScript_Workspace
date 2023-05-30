function changeElement() {
    // Get user input from the input field
    const userInput = document.getElementById('inputField').value;

    // Change the text of the output element
    document.getElementById('outputElement').innerHTML = userInput;
}
