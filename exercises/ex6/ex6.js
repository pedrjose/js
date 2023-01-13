/* js class connected with onclick of html file */
function multiplyBy() {
    /* local variable receiving the input from html file */
    num1 = document.getElementById("first-number").value;
    num2 = document.getElementById("second-number").value;
    /* return the operation to html content id */
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("first-number").value;
    num2 = document.getElementById("second-number").value;
    document.getElementById("result").innerHTML = num1 / num2;
}