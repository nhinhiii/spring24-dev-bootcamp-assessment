const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

var navLinks = document.getElementById("navLinks");

function openNav() {
    navLinks.style.right = "0";
}

function closeNav() {
    navLinks.style.right = "-200px";
}
