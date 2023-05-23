// Add JavaScript Code here

// fetch username and password from json file

async function loadCredent() {
    const requestURL = './users.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const nameText = await response.json();
    const passText = await response.json();

    const names = JSON.parse(nameText);
    const pass = JSON.parse(passText);


    // Set username and password to value of html username and password field

    function checkCredent () {
        const username = document.getElementById('uname').value
        const password = document.getElementById('pwd').value
        const uname = JSON.strigfy(username)
        const pwd = JSON.stringfy(password)

        // check if username input match usernames in json file

        if (uname === names && pwd === pass) {
            alert('Logged in successfully');
            location.assign('../html/home.html');

        } else {
            alert('Invalid credentials');
        }

        // Alter Dom navbar based on user role

        switch () {
        case uname === 'admin':
            const service = document.getElementById('service')
            const booking = document.getElementById('booking');
            const login = document.getElementById('login');
            const reporting = document.getElementById('reports');
            service.remove();
            booking.remove();
            login.remove();
            document.getElementById('name').innerHTML = 'Hi ' + object.uname;
            break;
        case uname === names:
            reporting.remove();
            document.getElementById('name').innerHTML = 'Hi ' + object.uname;
            break;
        default:
            alert('You are not an authorized user!')
            break;
        }
    }  
}
