console.log("the js file is running with the site.");

let redButton = document.querySelector(".red-button");      //triggering TypeOf errror with the variable being set
let background = document.querySelector(".background");

redButton.addEventListener("click", () => {
    console.log("the button has clicked");
});