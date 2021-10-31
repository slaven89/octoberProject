console.log("the js file is running with the site.");

let redButton = document.querySelector('#red-button');
let blueButton = document.querySelector('#blue-button');
let yellowButton = document.querySelector('#yellow-button');
let greenButton = document.querySelector('#green-button');
let returnButton = document.querySelector('#return-button');

redButton.addEventListener('click', function(){
    document.body.style.background= "hsl(358, 66%, 67%)";
})
blueButton.addEventListener('click', function(){
    document.body.style.background= "hsl(240, 59%, 70%)";
})
yellowButton.addEventListener('click', function() {
    document.body.style.background= "hsl(57, 82%, 62%)";
})
greenButton.addEventListener('click', function() {
    document.body.style.background= "hsl(99, 81%, 67%)";
})
returnButton.addEventListener('click', function() {
    document.body.style.background= "hsl(0, 66%, 87%)";
})
