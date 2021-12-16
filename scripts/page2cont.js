console.log("the js is working on this page.")

var listOfBirthdays = sessionStorage.getItem("listOfBirthdays");
var birthdayArray = JSON.parse(listOfBirthdays);

console.log(birthdayArray);

const submitSearch = (ev) => {
    ev.preventDefault();
    let typedName = document.getElementById('searchName').value;
    console.log(typedName);
    for (start = 0; start < birthdayArray.length; start++) {
        if (typedName == birthdayArray[start].name) {
            console.log('it matched');
            const p = document.querySelector('p');
            p.innerText = 'This person\'s birthday is: ' + birthdayArray[start].birthday;
        }
    };
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonPress').addEventListener('click', submitSearch);
});