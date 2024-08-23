const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

var navLinks = document.getElementById("navLinks");

function open(){
    navLinks.style.right = "0";
}

function close(){
    navLinks.style.right = "-200px";
}