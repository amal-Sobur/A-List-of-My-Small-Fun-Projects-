
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const generateColor = () => {

let bgColor = "#";
const parts = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let i = 0; i < 6; i++) {
 let randomPicker = Math.floor(Math.random() * 15);
let pickedValue = parts[randomPicker];
bgColor = bgColor + pickedValue;

}
console.log(bgColor);
document.body.style.backgroundColor = bgColor;
color.textContent = bgColor;
}

btn.addEventListener("click", generateColor);
    // let randomNumber = Math.floor(Math.random() * 3);
    // // this creates a random floating number b/w 0 and 3 and floors it to the newarest whole with Math.floor 
    // // r emember that Math.random() is function call and has to be ended with parantheses 
    // console.log(document.body, randomNumber);
    // document.body.style.backgroundColor = colors[randomNumber];
    // color.textContent = colors[randomNumber];


