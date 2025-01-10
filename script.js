const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1El = document.getElementById("pwd1")
let pwd2El = document.getElementById("pwd2")

let firstPwd ="";
let secondPwd = "";


let passwordLength = 15;

function updateLength(length) {
    passwordLength = length;
}

function generate() {
    firstPwd ="";
    secondPwd = "";
    for (let i = 0; i < passwordLength; i++) {
        firstPwd += characters[Math.floor(Math.random() * characters.length)];
    }
    for (let i = 0; i < passwordLength; i++) {
        secondPwd += characters[Math.floor(Math.random() * characters.length)];
    }
    pwd1El.textContent = firstPwd
    pwd2El.textContent = secondPwd
}

function copyPassword1() {
    if (firstPwd) {
        navigator.clipboard.writeText(firstPwd)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                alert("Failed to copy password");
            });
    } else {
        alert("No password to copy, generate one first.");
    }
}

function copyPassword2() {
    if (secondPwd) {
        navigator.clipboard.writeText(secondPwd)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                alert("Failed to copy password");
            });
    } else {
        alert("No password to copy, generate one first.");
    }
}
