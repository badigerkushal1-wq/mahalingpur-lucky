function registerUser() {

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;

if(name == "" || mobile == "" || password == "") {
alert("Fill all fields");
return;
}

localStorage.setItem("ml_name", name);
localStorage.setItem("ml_mobile", mobile);
localStorage.setItem("ml_password", password);

alert("Account Created Successfully");

window.location.href = "index.html";

}

function loginUser() {

let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;

let savedMobile = localStorage.getItem("ml_mobile");
let savedPassword = localStorage.getItem("ml_password");

if(mobile == savedMobile && password == savedPassword){

localStorage.setItem("loggedIn", "true");

window.location.href = "dashboard.html";

} else {

alert("Invalid Login Details");

}

}

function checkLogin(){

let status = localStorage.getItem("loggedIn");

if(status != "true"){
window.location.href = "index.html";
}

}

function logoutUser(){

localStorage.removeItem("loggedIn");

window.location.href = "index.html";

}
