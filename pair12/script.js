// function isHighScore(score){
//     return score >= 10;
// }
// let scores = [7, 12, 8, 9, 10, 5]
// let highScore = scores.filter(isHighScore);
// console.log(highScore)


// let scores = [7, 12, 8, 9, 10, 5]
// let highScore = scores.filter(score => score >= 10);
//
// console.log(highScore)

// let courses = [
//     {id: 1, title: "HTML", price: 700, description: "HTML description", active: true},
//     {id: 2, title: "CSS", price: 300, description: "CSS description", active: true},
//     {id: 3, title: "JavaScript", price: 400, description: "JavaScript description", active: false},
//     {id: 4, title: "Vue", price: 800, description: "Vue description", active: true},
// ]
// let found = courses.find(course => course.id === 3);
// console.log(found);
// if (found !== undefined) {
//     console.log(found.description);
// }else {
//     console.log("Такого курсу немає");
// }
// let activeCourse = courses.filter(course => course.active === true);
// let lowCost = courses.filter(course => course.price <= 400);
// console.log(lowCost);
// console.log(activeCourse);
//
// let title = courses.map(course => course.title);
// let sellPrice = courses.map(course => course.price*0.9);
// // console.log(`Початкові дані: ${courses}`);
// console.log(`Назви курсів: ${title}`);
// console.log(`Оновлена вартість курсів: ${sellPrice}`);
//
// let search = courses.filter(course => course.title.includes("Script"));
// console.log(search);

function isAvailable(book){
    return book.available === true;
}
let books = [
    {id: 1, title: "HTML for the beginners", author: "Olena Klasna", year: 2024, available: true},
    {id: 2, title: "JavaScript for the beginners", author: "Olena Prekrasna", year: 2022, available: false},
    {id: 3, title: "CSS for the beginners", author: "Olena Zhinka", year: 2022, available: true},
    {id: 4, title: "HTML+JavaScript+CSS for the beginners", author: "Olena Muzhnya", year: 2024, available: false}
]
let userIDBook = +prompt("What is your book ID?");
let found = books.find(book => book.id === userIDBook);
let availableBooks = books.filter(isAvailable);
let title = books.map(book => book.title).join(', ');
let js = books.filter(book => book.title.includes("JavaScript"));