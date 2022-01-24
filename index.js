const photoImg = document.querySelector('.photo img');
const male = document.querySelector('[data-gender="male"]');
const female = document.querySelector('[data-gender="female"]');
const firstName = document.querySelector('[data-firstName]');
const lastName = document.querySelector('[data-lastName]');
const dateOfBirth = document.querySelector('[data-dob]');
const street = document.querySelector('[data-street]');
const number = document.querySelector('[data-number]');
const city = document.querySelector('[data-city]');
const state = document.querySelector('[data-state]');
const code = document.querySelector('[data-postal]');
const phone = document.querySelector('[data-phone]');
const cell = document.querySelector('[data-cell]');


male.addEventListener('click', function(e){
    const genderMale = e.target.attributes["data-gender"].value;
    console.log(genderMale);
    getUsers(genderMale);
});

female.addEventListener('click', function(e){
    const genderFemale = e.target.attributes["data-gender"].value;
    console.log(genderFemale);
    getUsers(genderFemale);
});

async function getUsers(genderName){
    const responsed = await fetch(`https://randomuser.me/api/?gender=${genderName}`);
    const jsond = await responsed.json();
    console.log(jsond);
    photoImg.src = jsond.results[0].picture.large;
    firstName.innerHTML =  jsond.results[0].name.first;
    lastName.innerHTML =  jsond.results[0].name.last;
    const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    dateOfBirth.innerHTML =  new Date(jsond.results[0].dob.date).toLocaleDateString(undefined, options);
    street.innerHTML = jsond.results[0].location.street.name;
    number.innerHTML = jsond.results[0].location.street.number;
    city.innerHTML = jsond.results[0].location.city;
    state.innerHTML = jsond.results[0].location.state;
    code.innerHTML = jsond.results[0].location.postcode;
    phone.innerHTML = jsond.results[0].phone;
    cell.innerHTML = jsond.results[0].cell;

}

getUsers();
