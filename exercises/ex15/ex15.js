/* Write a JavaScript program to find the most frequent item of an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; */

function mostFrequentItem(array) {
    let mostItem = 0; let i; let j; let aux = 0;
    for (i = 0; i < array.length; i++) {
        aux = 0;
        for (j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                aux += 1;
            }
        }
        if (aux >= mostItem) {
            mostItem = aux;
        }
    }
    return mostItem;
}

let array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(`\nThe most frequent of a item in the array is ${mostFrequentItem(array)}`);