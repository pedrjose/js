// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function evenNumbers(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function addInArray() {
    let arrayList = new Array(); let element;
    let op = true; let firstItem = true; let oddOrEven;
    while (op) {
        // inputing the element
        element = prompt(`INPUT A NUMBER (Insert 'STOP' string to stop): `);
        // what to stop the loop?
        if (element == 'STOP') {
            op = false;
        }
        // it's NOT the first number inputing
        else if (!firstItem) {
            // transform to a int data
            parseInt(element);
            // if the element is even and the previous element is even too
            if (evenNumbers(element) && oddOrEven == 0) {
                arrayList.push('-');
                arrayList.push(element);
                oddOrEven = 0;
            }
            // if the element is even but the previous not
            else if (evenNumbers(element)) {
                arrayList.push(element);
                oddOrEven = 0;
            }
            else {
                arrayList.push(element);
                oddOrEven = 1;
            }
        }
        // it's the first element inputing
        else if (firstItem) {
            // transform to a int data
            parseInt(element);
            // if the first element is a even number
            if (evenNumbers(element)) {
                oddOrEven = 0;
            }
            // in the case of first element be a odd number
            else {
                oddOrEven = 1;
            }
            arrayList.push(element);
            firstItem = false;
        }
        else {
            alert(`YOUR INPUT WAS NOT REGISTRED. TRY AGAIN!`)
        }
    }
    alert(arrayList);
}
