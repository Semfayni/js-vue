let type = +prompt("Доступні типи події:\n1 - кіно\n2 - театр\n3 - концерт");
let typeName = "";
let price = 0;
let sumPrice = 0;
let numTicketsFree = 0;
let numTicketsDiscounted = 0;
let numTicketsFull = 0;
let numTicketsProcessed = 0;
while (!(type === 1 || type === 2 || type === 3)) {
    type = +prompt("Доступні типи події:\n1 - кіно\n2 - театр\n3 - концерт");
}
switch (type) {
    case 1:
        typeName = "кіно";
        price = 150;
        break;
    case 2:
        typeName = "театр";
        price = 220;
        break;
    case 3:
        typeName = "концерт";
        price = 350;
        break;
}

let day = +prompt("Оберіть тип дня:\n1 - будній\n2 - вихідний");
while (!(day === 1 || day === 2)) {
    day = +prompt("Оберіть тип дня:\n1 - будній\n2 - вихідний");
}
switch (day) {
    case 1:
        break;
    case 2:
        price = price * 1.15;
        break;
}

let numTickets = +prompt("Введіть кількість квитків від 1 до 6");
while (numTickets < 1 || numTickets > 6) {
    numTickets = +prompt("Введіть кількість квитків від 1 до 6");
}

for (let i = 1; i <= numTickets; i++) {
    let age = +prompt("Введіть Ваш вік");
    if (age === -1) {
        break;
    }
    while (age < 0 || age > 100) {
        age = +prompt("Введіть Ваш вік");

        if (age === -1) {
            break;
        }
    }
    if (age === -1) {
        break;
    }
    numTicketsProcessed++;
    let ticketPrice = price;
    if (age >= 0 && age <= 5) {
        numTicketsFree++;
        continue;
    } else if (age >= 6 && age <= 12) {
        ticketPrice = ticketPrice * 0.5;
        numTicketsDiscounted++;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = ticketPrice * 0.8;
        numTicketsDiscounted++;
    } else if (age >= 18 && age <= 25) {
        let student = +prompt("Чи є студентський квиток?\n1 - так\n2 - ні");

        while (!(student === 1 || student === 2)) {
            student = +prompt("Чи є студентський квиток?\n1 - так\n2 - ні");
        }

        if (student === 1) {
            ticketPrice = ticketPrice * 0.9;
            numTicketsDiscounted++;
        } else {
            numTicketsFull++;
        }
    } else if (age >= 26 && age <= 59) {
        numTicketsFull++;
    } else if (age >= 60 && age <= 100) {
        ticketPrice = ticketPrice * 0.75;
        numTicketsDiscounted++;
    }
    sumPrice += ticketPrice;
}
if (sumPrice > 1000) {
    sumPrice = sumPrice * 0.95;
}
console.log(
    `Подія: ${typeName}\nОброблено квитків: ${numTicketsProcessed}\nБезкоштовних: ${numTicketsFree}\nЗі знижкою: ${numTicketsDiscounted}\nПовної ціни: ${numTicketsFull}\nЗагальна сума: ${sumPrice} грн`
);