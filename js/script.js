function registerUser(){

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;

if(name === "" || mobile === "" || password === ""){

alert("Please fill all fields");
return;

}

localStorage.setItem("user_name", name);
localStorage.setItem("user_mobile", mobile);
localStorage.setItem("user_password", password);

localStorage.setItem("user_balance", "1000");

alert("Account Created Successfully");

window.location.href = "index.html";

}

function loginUser(){

let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;

let savedMobile = localStorage.getItem("user_mobile");
let savedPassword = localStorage.getItem("user_password");

if(mobile === savedMobile && password === savedPassword){

window.location.href = "dashboard.html";

}else{

alert("Invalid Login Details");

}

}

function loadBalance(){

let balance = localStorage.getItem("user_balance");

document.getElementById("balance").innerHTML =
"₹" + balance;

}

function joinRoom(amount){

let balance = parseInt(localStorage.getItem("user_balance"));

if(balance >= amount){

balance = balance - amount;

localStorage.setItem("user_balance", balance);

alert("Room Joined Successfully 🚀");

location.reload();

}else{

alert("Insufficient Balance");

}

}
