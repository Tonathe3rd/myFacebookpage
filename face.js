var database = [
    {
        username: "andre",
        password: "secre"
    }
];

var newsFeed = [
    {
        username: "bolu",
        timeline: "So tired from all that learning"
    },
    {
        username: "mololu",
        timeline: "javascript is so cool"
    }
];

// var userNamePrompt = prompt("what is your username?");
// var passwordPrompt = prompt("what is your password?");
var username = document.getElementById("name");
var password = document.getElementById("password");
var login = document.getElementById("submit");

//not working
function inputLenght() {
    if (username.value.lenght === 0 && password.value.lenght === 0) {
        alert("username or password can not be empty")
    }
}
login.addEventListener("click", inputLenght);

function facebookPage(){
    if (username.value === database[0].username && password.value === database[0].password) {
        console.log(newsFeed);
        
    } else{
        alert("username or password incorrect");
    }    
    username.value = "";
    password.value = "";
}
login.addEventListener("click", facebookPage);


//this worked
// login.onclick = function() {
//     login.style.backgroundColor = "red";
// }

