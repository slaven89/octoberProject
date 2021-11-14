console.log("the js is working on this page.");

let storedBirthdays = [];

const submitForm = (ev) => {
    ev.preventDefault();
    let storedBirthday = {
        id: Date.now(),
        name: document.getElementById('fullName').value,
        birthday: document.getElementById('birthDate').value
    }
    storedBirthdays.push(storedBirthday);
    document.querySelector('form').reset;

    console.log('added' , storedBirthday);

    localStorage.setItem('ListofBirthdays', JSON.stringify(storedBirthdays) );
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sbmt').addEventListener('click', submitForm);
});

