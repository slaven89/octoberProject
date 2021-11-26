

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

    localStorage.setItem('listOfBirthdays', JSON.stringify(storedBirthdays) );

    document.location.href= "page2cont.html";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sbmt').addEventListener('click', submitForm);
});

