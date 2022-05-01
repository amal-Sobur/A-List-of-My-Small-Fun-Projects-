// select the counter 
const value = document.getElementById("value");

// get all buttons 
const btns = document.querySelectorAll(".btn");

let count = 0

// Remember to use teration methods to make work a lot easier and faster. Setting up this operation individually 
// on each button as I did below would have been a great hassle
btns.forEach(function (btn) {
    btn.addEventListener ("click", function(e) {
      const classes =  e.currentTarget.classList;
      if (classes.contains("increase")) {
        count++
      } else if (classes.contains("decrease")) {
        count--
      } else {
          count = 0;
      }
      value.textContent = count;

    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0 ) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }

    }) 
    }

)



// revise scopes and callbacks 

// let counter = 0;
// const btnDecrease = document.querySelector(".decrease");
// const btnIncrease = document.querySelector(".increase");
// const btnReset = document.querySelector(".reset");
// const valueShown = document.querySelector("#value");

// btnDecrease.addEventListener("click", function (e) {
//     counter--;
//     valueShown.textContent = counter;
    
//  if (counter > 0) {
//     value.style.color = "green";
// } else if (counter < 0 ) {
//    value.style.color = "red";
// } else {
//     value.style.color = "black";
// }
// console.log(counter);
// }) 

// btnIncrease.addEventListener("click", function (e) {
//     console.log(counter);
//     counter++;
//     valueShown.textContent = counter;
    
//  if (counter > 0) {
//     value.style.color = "green";
// } else if (counter < 0 ) {
//    value.style.color = "red";
// } else {
//     value.style.color = "black";
// }
// })

// btnReset.addEventListener("click", function (e) {
//     counter = 0;
//     valueShown.textContent = 0;
    
//  if (counter > 0) {
//     value.style.color = "green";
// } else if (counter < 0 ) {
//    value.style.color = "red";
// } else {
//     value.style.color = "black";
// }
// })
