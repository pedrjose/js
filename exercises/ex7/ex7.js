/*
Write a JavaScript program where the program takes a random integer between 1 to 10, the user 
is then prompted to input a guess number. If the user input matches with guess number, the 
program will display a message "Good Work" otherwise display a message "Not matched".
*/

let num = Math.floor(Math.random() * 10);
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`\nINPUT A NUMBER: `, (number) => {
    if (num == number) {
        console.log(`\n${num} mathed with ${number}. Good Work!`)
    }
    else {
        console.log(`\nNot matched!`)
    };
  })