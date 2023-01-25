//  Write a JavaScript function to get the last element of an array.

function lastElement() {
    let op = true; let arrayNumbers = new Array(); let inputNumber;
    while (op) {
        inputNumber = prompt(`INPUT A NUMBER (Insert 'STOP' to stop): `);
        if (inputNumber == 'STOP') {
            alert(arrayNumbers[arrayNumbers.length - 1]);
            op = false;
        }
        else {
            parseInt(inputNumber);
            arrayNumbers.push(inputNumber);
        }
    }
}