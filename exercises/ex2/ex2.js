// Write a JavaScript program to display the current day and time in the following format.
// 'Today is Tuesday and current time is 10:30:38'

let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
let day = new Date(); let today = day.getDay();
let hour; let minutos; let seconds;
hour = day.getHours(); minutes = day.getMinutes(); seconds = day.getSeconds();

if (hour>=12) {
    console.log(`Today is ${daylist[today]} and current time is ${hour}:${minutes}:${seconds}, PM!`);
}
else {
    console.log(`Today is ${daylist[today]} and current time is ${hour}:${minutes}:${seconds}, AM!`);
}