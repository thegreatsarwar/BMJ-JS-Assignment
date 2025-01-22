function hrefMain(){
    window.location.href = 'index.html'
}
function plus(){
    let num1 = prompt("Pls enter 1st Number");
    let num2 = prompt("Pls enter 2nd Number");
    if(!isNaN(num1 && !isNaN(num2))){
    let result = parseInt(num1) + parseInt(num2);
    alert(`the sum of 1st Number ${num1} and second Number ${num2} is : ` + result);
    console.log(result);
}
}
function minus(){
    let num1 = prompt("Pls enter 1st Number");
    let num2 = prompt("Pls enter 2nd Number");
    if(!isNaN(num1 && !isNaN(num2))){
    let result = parseInt(num1) - parseInt(num2);
    alert(`the difference of 1st Number ${num1} and second Number ${num2} is : ` + result);
}
}
function multi(){
    let num1 = prompt("Pls enter 1st Number");
    let num2 = prompt("Pls enter 2nd Number");
    if(!isNaN(num1 && !isNaN(num2))){
    let result = parseInt(num1) * parseInt(num2);
    alert(`the product of 1st Number ${num1} and second Number ${num2} is : ` + result);
}
}
function divid(){
    let num1 = prompt("Pls enter 1st Number");
    let num2 = prompt("Pls enter 2nd Number");
    if(!isNaN(num1 && !isNaN(num2))){
    let result = parseInt(num1) / parseInt(num2);
    alert(`the division of 1st Number ${num1} and second Number ${num2} is : ` + result);
}
}