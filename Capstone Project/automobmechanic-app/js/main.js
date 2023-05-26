// Assign json to object

let users;

// fetch name, username, and password from json file

fetch('/Capstone Project/automobmechanic-app/js/users.json')
    .then(response => response.json())
    .then(data => {
        users = data
        console.log(users)
        validateUserInput()
    })
    .catch(error => {
        console.log('An error occured:', error);
    });

// Object to hold user input

const formData = {
    username: '',
    password: ''
}

// Function to store username and password in formData Object

function handleSubmit(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('uname').value;
    const passwordInput = document.getElementById('pwd').value;

    formData.username = usernameInput;
    formData.password = passwordInput;
}

// Add event listener to form

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    handleSubmit()
});

// Function to validate if user input match username/password in json file

function validateUserInput() {

    // Varables for DOM based on User role
    const service = document.getElementById('service');
    const booking = document.getElementById('booking');
    const reporting = document.getElementById('reports');


    if (users) {
        switch (true) {
            // Checks if user role is admin
            case formData.username === users[0].username && formData.password === users[0].password:
                sessionStorage.setItem('username', formData.username);
                sessionStorage.setItem('password', formData.password);
                alert('Logged in successfully');
                location.assign('../html/home.html');
                // Removes following elements from navbar on homepage
                service.remove();
                booking.remove();
                break;
            case formData.username === users.username && formData.password === users.password:
                // checks for all other users in json file
                sessionStorage.setItem('username', formData.username);
                sessionStorage.setItem('password', formData.password);
                alert('Logged in successfully');
                location.assign('../html/home.html');
                // Removes following elements from navbar on homepage
                reporting.remove();
                break;
            default:
                // If the userinput does not match any users in json file
                alert('Invalid credentials: Please Try Again');
        }
    }
}

// add event listener to form submit button to validate user

document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault();

    validateUserInput();
})