

let numbers = [];
let rndNumberIn;

let grid = document.querySelector(".grid");

while (numbers.length < 100) {

    rndNumberIn = getRndInteger(1, 100);

    if (!numbers.includes(rndNumberIn)) {
        numbers.push(rndNumberIn);
    } 

   
}
console.log(numbers);





for (let i = 0; i < numbers.length; i++) {
    
    let square = document.createElement("div");
    square.classList.add("square");

    square.innerHTML = numbers[i];

    grid.append(square);
    
    square.addEventListener("click", function() {
        this.classList.add("blue");
        this.classList.add("color_white");

        console.log(this.textContent);
    })
}











// FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }