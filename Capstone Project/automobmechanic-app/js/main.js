// Assign json to object

let users;

function handleButtonClick() {
    console.log('button clicked')
    // fetch name, username, and password from json file

    async function loadUsers() {
        fetch('/Capstone Project/automobmechanic-app/js/users.json' + Date.now())
            .then(response => response.json())
            .then(data => {
                users = data
                console.log(users)

            })
            .catch(error => {
                console.log('An error occured:', error);
            });

    }
    loadUsers();
};

// Function to store username and password in formData Object

function handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit executed')

    const usernameInput = document.getElementById('uname').value;
    const passwordInput = document.getElementById('pwd').value;

    // check if either username or password is empty
    if (!usernameInput || !passwordInput) {
        alert('Please enter both username and password');
        return;
    }

    // Object to hold user input

    const formData = {
        username: usernameInput,
        password: passwordInput
    }
    handleButtonClick();
    validateUserInput(formData);
}

// Function to validate if user input match username/password in json file

function validateUserInput(formData) {

    // varibles for DOM navbar layout based on users
    console.log('validation')
    const service = document.getElementById('services')
    const book = document.getElementById('booking')
    const report = document.getElementById('reporting')

    if (!users) {
        alert('Users data is not available');
        return;
    }

    const matchedUser = users.find(
        user => user.username === formData.username && user.password === formData.password
    );

    if (matchedUser) {
        sessionStorage.setItem('username', formData.username);
        sessionStorage.setItem('password', formData.password);
        alert('Logged in successfully');
        location.assign('../html/home.html');

        switch (matchedUser.name) {
            case 'admin':
                service.remove();
                book.remove();
                break;
            case 'alex':
            case 'johnson':
            case 'chris':
            case 'eliza':
            case 'mary':
                report.remove()
                break;
            default:
                alert('Invalid credentials: Please Try Again');
        }
    } else {
        // If the user input does not match any users in the json file
        alert('Invalid credentials: Please Try Again');
    }
}

// add event listener to form submit button to validate user
document.getElementById('myForm').addEventListener('submit', handleSubmit);

// Set the countdown duration (10 minutes)
const countdownDuration = 10 * 60 * 1000; // 10 minutes in milliseconds

// Get the current timestamp
const startTime = new Date().getTime();

// Calculate the end time by adding the countdown duration to the start time
const endTime = startTime + countdownDuration;

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current timestamp
    const currentTime = new Date().getTime();

    // Calculate the remaining time
  const remainingTime = endTime - currentTime;

    // Calculate minutes and seconds
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown in the console or update the HTML element
    document.getElementById('counter').innerHTML = minutes + ' minutes ' + seconds + ' seconds';

    // Check if the countdown is finished
    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        console.log('Countdown finished!');
        // Perform any desired actions here after the countdown finishes
    }
}

// add event listener to form submit button to validate user
document.getElementById('counter').addEventListener('onclick', updateCountdown)