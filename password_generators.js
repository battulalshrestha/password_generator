const passwordbox = document.getElementById("password")
//console.log(passwordbox);

const length= 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&*()-_=+{}[]|\\:;\"'<>,.?/"
const number = '0123456789'
const allchar = uppercase+lowercase+symbols+number
//console.log(allchar);

function createPassword(){
    let password= "";
    password = password+uppercase[Math.floor(Math.random()*uppercase.length)]
    password = password+lowercase[Math.floor(Math.random()*lowercase.length)]
    password = password+symbols[Math.floor(Math.random()*symbols.length)]
    password = password+number[Math.floor(Math.random()*number.length)]




    //console.log(password);
    while (length > password.length){
       password = password+allchar[Math.floor(Math.random()*allchar.length)]

    }
    passwordbox.value = password;
}
// document.getElementById('copy').onclick = function(){
//     alert("copied")
// }

// you can write as well 
// but in this case you must write click . cannot replace by writing nothing
// document.getElementById("copy").addEventListener("click",function(){
//     alert("copied")
// })

function copypassword(){
const passwordField = document.getElementById("password")
passwordField.setSelectionRange(0, 12);
document.execCommand('password')
alert("Copied");
}
//  function copypassword(){
//  const passwordField =  document.getElementById('img')
//  passwordField.select()
//   document.execCommand("copy")
//   alert("Password copied: " + passwordField.value. 

// Function to copy the password
function copypassword() {
    const passwordField = document.getElementById("password");

    // Check if there's a password to copy
    if (passwordField.value) {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                alert("Password copied: " + passwordField.value);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        alert("No password to copy!");
    }
}