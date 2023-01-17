//  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function celsiusToKelvin() {
    let num = document.getElementById("number-to-convert").value;
    document.getElementById("result").innerHTML = (273 + parseInt(num))+.15;
}

function celsiusToFahrenheit() {
    num = document.getElementById("number-to-convert").value;
    document.getElementById("result").innerHTML = (9/5)*parseInt(num)+32;
}

function fahrenheitToCelsius() {
    num = document.getElementById("number-to-convert").value;
    document.getElementById("result").innerHTML = (5/9)*(parseInt(num)-32);
}

function fahrenheitToKelvin() {
    num = document.getElementById("number-to-convert").value;
    document.getElementById("result").innerHTML = (5/9)*(parseInt(num)+459.67);
}

function fahrenheitToRankin() {
    num = document.getElementById("number-to-convert").value;
    document.getElementById("result").innerHTML =  parseInt(num) + 459.67;
}

function rankinToKelvin() {
    num = document.getElementById("number-to-convert").value;
    document.getElementById("result").innerHTML = (5/9)*parseInt(num);
}