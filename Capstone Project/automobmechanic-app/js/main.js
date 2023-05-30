
document.addEventListener('DOMContentLoaded', function () {
    // Assign json to object

    let users;

    // fetch name, username, and password from json file

    fetch('/Capstone Project/automobmechanic-app/js/users.json')
        .then(response => response.json())
        .then(data => {
            users = data
            console.log(users)
            validateUserInput();
        })
        .catch(error => {
            console.log('An error occured:', error);
        });


    // Object to hold user input

    const formData = {
        username: '',
        password: ''
    }

    // Add event listener to form

    document.getElementById('myForm').addEventListener('submit', handleSubmit);

    // Function to store username and password in formData Object

    function handleSubmit(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('uname').value;
        const passwordInput = document.getElementById('pwd').value;

        // check if either username or password is empty
        if (!usernameInput || !passwordInput) {
            alert('Please enter both username and password');
            return;
        }
        formData.username = usernameInput;
        formData.password = passwordInput;

        validateUserInput();
    }

    // Function to validate if user input match username/password in json file

    function validateUserInput() {

        // varibles for DOM navbar layout based on users

        const service = document.getElementById('services')
        const book = document.getElementById('booking')
        const report = document.getElementById('reporting')


        if (!users) {
            console.log('Users data is not available');
            return;
        }

        if (users) {
            const matchedUser = users.find(
                user => user.username === formData.username && user.password === formData.password
            );

            if (matchedUser) {
                sessionStorage.setItem('username', formData.username);
                sessionStorage.setItem('password', formData.password);
                alert('Logged in successfully');
                location.assign('../html/home.html');
            } else {
                // If the user input does not match any users in the json file
                alert('Invalid credentials: Please Try Again');
            }
        }

    }
    // add event listener to form submit button to validate user
    document.getElementById('btn').addEventListener('click', handleSubmit);
});

// DOM manipulation function

function changeElement(event) {
    event.preventDefault()
    // Get user input from the input field
    let userInput = document.getElementById('uname').value;
    // Get elements to be maniplated
    let report = document.getElementById('reporting').parentElement;
    let service = document.getElementById('services').parentElement;
    let book = document.getElementById('booking').parentElement;

    if (userInput) {
        // Check for user-specific elements to remove from the navbar
        // Display user name in nave bar when logged in 
        switch (userInput.value) {
            case 'admin':
                // Remove elements from nave bar
                service.style.display = 'none';
                book.style.display = 'none';
                // Change the text of the output element
                document.getElementById('name').innerHTML = 'Hi' + userInput;
                break;
            case 'alex':
            case 'johnson':
            case 'chris':
            case 'eliza':
            case 'mary':
                // Remove elements from nave bar
                report.style.display = 'none';
                // Change the text of the output element
                document.getElementById('name').innerHTML = 'Hi' + userInput;
                break;
            // Add additional cases as needed for other users
            default:
                break;
        }

    }
}

// add event listener to form submit button to validate user
document.getElementById('name').addEventListener('li', changeElement);
