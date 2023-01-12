// Write a JavaScript program to get the current date.

let day = new Date(); 
let today = day.getDate(); let month = day.getMonth(); let year = day.getFullYear();
console.log(`\nThe current date is ${(month+1)}-${today}-${year}.`);