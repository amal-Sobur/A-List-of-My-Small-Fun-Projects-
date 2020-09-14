
function getRandom () {
let max = Math.floor(10);
    min = Math.floor(1);
    randomNumber = Math.floor(Math.random() * (max - min) + 1); 
    return randomNumber;
}

function changeColor () {
    let backgroundColors = ["...", "blue", "yellow", "orange", "white", "purple", "cyan", "brown", "grey", "red" ];
    getRandom()
    document.getElementById("main").style.backgroundColor = backgroundColors[randomNumber];
}

