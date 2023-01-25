/* Write a JavaScript program to get all the indexes where NaN is found of a given array of numbers and NaN. */

function notANum (array) {
    let i; let indexArray = new Array();
    for (i=0;i<array.length;i++) {
        if (isNaN(array[i])) {
            indexArray.push(i);
        }
    }
    return indexArray;
}

let array = [2, 4, NaN, 16, 32, NaN];
console.log(`Finding all indexes of NaN of the array: ${notANum(array)}!`);