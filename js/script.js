// Creare gli squares dentro grid con i numeri random da 1 a 100 all'interno

let numbers = [];
console.log(numbers.length);
while (numbers.length < 100) {

    let rndNumberIn = getRndInteger(1, 100);

    if (!numbers.includes(rndNumberIn)) {
        numbers.push(rndNumberIn);
    } 

    
}









// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }