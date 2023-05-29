
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

                // Check for user-specific elements to remove from the navbar

                switch (matchedUser.username) {
                    case 'admin':
                        
                        break;
                    case 'alex':
                    case 'johnson':
                    case 'chris':
                    case 'eliza':
                    case 'mary':
                        
                        break;
                    // Add additional cases as needed for other users
                    default:
                        break;
                }
            } else {
                // If the user input does not match any users in the json file
                alert('Invalid credentials: Please Try Again');
            }
        }

    }
    // add event listener to form submit button to validate user
    document.getElementById('btn').addEventListener('click', handleSubmit);
});