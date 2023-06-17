// Logout user
const logout = document.getElementById('logout')
function signOut() {
    sessionStorage.clear()
    alert('Logout Successful');
    location.assign('../html/home.html')
}

logout.addEventListener('click', signOut);