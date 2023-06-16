document.addEventListener('DOMContentLoaded', function () {
    let users;

    // Function to load users from JSON file
    function loadUsers () {
        return fetch('/Capstone Project/automobmechanic-app/js/users.json')
            .then(response => response.json())
            .then(data => {
                users = data;
                console.log(users);
            })
            .catch(error => {
                console.log('An error occurred:', error);
            });
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('uname').value;
        const passwordInput = document.getElementById('pwd').value;

        // Check if either username or password is empty
        if (!usernameInput || !passwordInput) {
            alert('Please enter both username and password');
            return;
        }

        // Create formData object to hold user input
        const formData = {
            username: usernameInput,
            password: passwordInput
        };

        validateUserInput(formData);
    }

    // Function to validate user input
    function validateUserInput(formData) {

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
            updateUserName(matchedUser.name)
            /*if (matchedUser.name == 'admin') {
                document.getElementById('name').innerHTML = 'Admin'
            }*/
        } else {
            // If the user input does not match any users in the JSON file
            alert('Invalid credentials: Please Try Again');
        }
    }

    function updateUserName(name) {
        const nameElement = document.getElementById('name');
        if (nameElement) {
            nameElement.textContent = name;
        }
    }

    loadUsers().then(() => {
        document.getElementById('btn').addEventListener('click', handleSubmit);
    });

    // Update user name if already logged in
    const username = sessionStorage.getItem('username');
    if (username) {
        updateUserName(username);
    }
});