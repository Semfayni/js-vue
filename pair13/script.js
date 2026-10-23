// let heading = document.querySelector('h1')
// console.log(heading)
// let nameElement = document.getElementById('profile-name')
// let profileElement = document.getElementsByClassName('profile-role')
// let skills = document.querySelectorAll('.skills')
//
// for(let skill of skills){
//     console.log(skill)
// }
// nameElement.textContent = "Надійка"

let student = {
    name: 'Надійка',
    role: 'Ліцеїстка 11 IT класу',
    city: 'Київ',
    portfolio: 'https://www.github.com/'
}
let nameElement = document.querySelector('#profile-name');
let roleElement = document.querySelector('.profile-role');
let cityElement = document.querySelector('#profile-city');
let portfolioElement = document.querySelector('#profile-link');

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.innerHTML = student.city;
// portfolioElement.textContent = student.portfolio;
// portfolioElement.innerHTML = student.portfolio;
portfolioElement.setAttribute('href', student.portfolio);
portfolioElement.setAttribute('title', "Відкрити портфоліо");

let skills = document.querySelectorAll('.skill');
skills[0].textContent = "HTML";
skills[1].textContent = "CSS";
skills[2].textContent = "JavaScript";