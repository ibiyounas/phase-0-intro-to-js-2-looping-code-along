// Code your solutions in this file
const names = ["Guadelupe", "Ollie", "Aki",];

function writeCards(names, events) {
    let thankYous = [];
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
        
    }
return thankYous;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int--);
    }
}