// Include the required JS code to make Toggle navbar work
function toggleNav() {
    var navbar = document.getElementById("myTopnav");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "topnav";
    }
}