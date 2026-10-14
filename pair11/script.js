// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: "1840",
//     price: 500,
//     available: true
// }
// console.log(book.title);
// // console.log(book[0]);

let books = [
    {
        id: 1,
        title: "Кобзар",
        author: "Тарас Шевченко",
        year: "1840",
        price: 500,
        available: true
    },
    {
        id: 2,
        title: "Лісова пісня",
        author: "Леся Українка",
        year: "1911",
        price: 450,
        available: true
    },
    {
        id: 3,
        title: "Тигролови",
        author: "Іван Багряний",
        year: "1943",
        price: 550,
        available: false
    },
    {
        id: 4,
        title: "Місто",
        author: "Валер'ян Підмогильний",
        year: "1927",
        price: 450,
        available: false
    }
];
// console.log(books[2]);
// for(let book of books){
//     console.log(`[${foundBook.id}]: ${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.price} грн.);
// }
// books.forEach(function(book){
//     console.log(book.title)
// })

let availableCount = 0;
let totalPrice = 0;
for (let book of books) {
    if (book.available) {
        availableCount++;
        totalPrice += book.price;
    }
}
console.log(availableCount);
console.log(totalPrice);

books.push({
    id: 5,
    title: "Захар Беркут",
    author: "Іван Франко",
    year: "1882",
    price: 500,
    available: true
})

console.log(books.length)

let idBooks = +prompt("Введіть id книги, яку хочете знайти: ");
let foundBook = null;
for (let book of books) {
    if (book.id === idBooks) {
        foundBook = book;
        break;
    }
}
console.log(foundBook);
if (foundBook !== null) {
    let status = "Немає в наявності";
    if (foundBook.available) {
        status = "В наявності";
    }
    alert(`[${foundBook.id}]: ${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.price} грн. (${status})`);
}else{
    alert("Книжки немає з таким ID")
}