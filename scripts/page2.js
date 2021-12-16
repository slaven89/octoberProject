

let storedBirthdays = [];

const submitForm = (ev) => {
    ev.preventDefault();
    let storedBirthday = {
        id: Date.now(),
        name: document.getElementById('fullName').value,
        birthday: document.getElementById('birthDate').value
    }
    storedBirthdays.push(storedBirthday);
    
    sessionStorage.setItem('listOfBirthdays', JSON.stringify(storedBirthdays) );
    console.log('added' , storedBirthday , 'to the array.');
    console.log(storedBirthdays);
    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sbmt').addEventListener('click', submitForm);
});

