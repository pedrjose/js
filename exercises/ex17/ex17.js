// Write a JavaScript program to count the number of arrays inside a given array.

function arrayInsideArray(array) {
    let i; let counter = 0;
    for (i = 0; i < array.length; i++) {
        if (typeof (array[i]) == 'object') {
            counter++;
        }
    }
    return counter;
}

let array1 = [2,8,[6],3,3,5,3,4,[5,4]];
let array2 = [2,8,[6,3,3],[4],5,[3,4,[5,4]]];

console.log(`Array numbers inside first array: ${arrayInsideArray(array1)}`);
console.log(`Array numbers inside first array: ${arrayInsideArray(array2)}`);