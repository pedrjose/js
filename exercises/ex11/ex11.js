// Write a JavaScript function to get the first element of an array.

function addInArray() {
    let op = true; let inputNumber; let numberArray = new Array();
    while (op) {
        inputNumber = prompt(`INPUT A NUMBER (Insert 'STOP' to stop): `);
        if (inputNumber == 'STOP') {
            alert(numberArray[0]);
            op = false;
        }
        else {
            parseInt(inputNumber);
            numberArray.push(inputNumber);
        }
    }
}