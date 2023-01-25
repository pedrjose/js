/* Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */

function sortArray(array) {
    let loop = array.length; 
    let beforeNumber; 
    let nextNumber; 
    let i; let j;
    for (i=0;i<loop;i++) {
        for (j=0;j<loop;j++) {
            if (array[i]<array[j]) {
                nextNumber = array[i];
                beforeNumber = array[j];
                array[i] = beforeNumber;
                array[j] = nextNumber;
            }
        }
    }
}

let array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
sortArray(array);
console.log(array);