console.log("the js file is running with the site.");

let redButton = document.querySelector(".red-button");
let allred = document.querySelector(".background");

function colorchange() {
    allred.style.font-family = Calibri;
}

redButton.onclick = colorchange;