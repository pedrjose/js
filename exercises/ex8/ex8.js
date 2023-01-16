// Write a JavaScript program to calculate days left until next Christmas.

let day = new Date(); let today = day.getDate(); let month = day.getMonth() + 1;
let daysUntilChristmas = 359; let counterDays = 0; let counterMonths = 0;

while (counterDays != today && counterMonths != month) {
    if (counterMonths <= 4) {
        counterDays += 1;
        if (counterDays == 30) {
            counterMonths += 1;
        }
    }
    else if (counterMonths > 4 && counterMonths % 2 != 0 && counterMonths < 12) {
        counterDays += 1;
        if (counterDays == 31) {
            counterMonths += 1;
        }
    }
    else if (counterMonths > 4 && counterMonths % 2 == 0 && counterMonths < 12) {
        counterDays += 1;
        if (counterDays == 30) {
            counterMonths += 1;
        }
    }
    else {
        counterDays += 25;
    }
}

console.log(`\n${daysUntilChristmas-counterDays} DAYS UNTIL NEXT CHRISTMAS!!`);