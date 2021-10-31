console.log("the js file is running with the site.");

let redButton = document.querySelector('#red-button');

console.log(redButton);

redButton.addEventListener('click', function(){
    document.body.style.background= 'red';
})
