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
