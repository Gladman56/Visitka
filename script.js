document.getElementById("burger2").addEventListener("click",function() {
    document.querySelector(".navbar").classList.toggle("open");
});

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");


let first = document.getElementById("first");
let second = document.getElementById("second");

const result = document.getElementById("result");

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 +num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "error";
            break;
    }
    result.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
});

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
});

const sin = document.getElementById("butsin");
const cos = document.getElementById("butcos");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");

let number =  document.getElementById("number");

const result1 = document.getElementById("result2");

let res1 = 0

function trigono(mark) {

    let num = parseFloat(number.value) || 0;

    num = num * (Math.PI/180);

    switch(mark) {
case "sin":
    res1 = Math.sin(num);
    break;
case "cos":
    res1 = Math.cos(num);
     break;
case "tg":
    res1 = (num % Math.PI) === (Math.PI/2) ? "error" : Math.tan(num);
    break;
case "ctg":
    res1 = (num % Math.PI) === 0 ? "error" : 1/Math.tan(num);
    break;

}
result1.textContent = res1;
}

sin.addEventListener("click", (event) => {
    event.preventDefault()
    trigono("sin");
});

cos.addEventListener("click", (event) => {
    event.preventDefault()
    trigono("cos");
});

tg.addEventListener("click", (event) => {
    event.preventDefault()
    trigono("tg");
});

ctg.addEventListener("click", (event) => {
    event.preventDefault()
    trigono("ctg");
});