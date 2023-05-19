
// Create a validate method with username and password as arguments.
function validation () {
    // If the username and password are equal it will return "Login Successful"
    // else will return "Unauthorized access".
    let password = document.getElementsByName('password').value
    let username = document.getElementsByName('name').value
    if (username === password) {
        return alert('Login Successful')
    } else {
        return alert('Unauthorized access')
    }
}

export { validation }
