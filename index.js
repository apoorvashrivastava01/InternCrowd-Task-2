function Register(){
    document.getElementById("Login").style.display="none";
    document.getElementById("Register").style.display="block";
}
function Login(){
    document.getElementById("Register").style.display="none";
    document.getElementById("Login").style.display="block";
}
function Submitted(){
    alert("YOU ARE REGISTERED !");
    document.getElementById("Register").style.display="none";
}
function Logedin(){
    alert("You have Login to the website");
    document.getElementById("Login").style.display="none";
}