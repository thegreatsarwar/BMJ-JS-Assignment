//https://github.com/thegreatsarwar/BMJ-Assignment---JavaScript.git


const passwordBox = document.getElementById("password")
const length = 12;



function createPassword(){

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const symbol = '@#$%^&*()_+~|}{[]<>/-='
const number = '0123456789'

const allChars = upperCase + lowerCase + number + symbol

    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];
    password += number[Math.floor(Math.random()* number.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password;
}




function OTP() {
    const  r1 = Math.trunc(Math.random()*10);
    const  r2 = Math.trunc(Math.random()*10);
    const  r3 = Math.trunc(Math.random()*10);
    const  r4 = Math.trunc(Math.random()*10);


console.log(`${r1}${r2}${r3}${r4}`)
   
}

function href1(){
    window.location.href='js1.html'
}
function href2(){
    window.location.href='js2.html'
}
function href3(){
    window.location.href='js3.html'
}
function href4(){
    window.location.href='js4.html'
}
function hrefMain(){
    window.location.href = 'index.html'
}