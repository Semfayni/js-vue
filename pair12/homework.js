let courses = [
    {id: 1, title: "HTML", category: "Frontend", price: 400, duration: 24, rating: 3, available: true},
    {id: 2, title: "CSS", category: "Frontend", price: 300, duration: 24, rating: 4, available: true},
    {id: 3, title: "JavaScript", category: "Backend", price: 700, duration: 48, rating: 5, available: false},
    {id: 4, title: "Vue", category: "Frontend", price: 800, duration: 36, rating: 4, available: true},
    {id: 5, title: "Python", category: "Backend", price: 900, duration: 56, rating: 5, available: true},
    {id: 6, title: "C++", category: "Backend", price: 1100, duration: 72, rating: 5, available: false},
    {id: 7, title: "Holy C", category: "Backend", price: 1200, duration: 256, rating: 1, available: false},
    {id: 8, title: "React+TypeScript", category: "Frontend", price: 1500, duration: 92, rating: 5, available: true}
];

function findCourseById(id) {
    return courses.find(course => course.id === id);
}

function findCoursesByCategory(category) {
    return courses.filter(course => course.category === category);
}

function findCoursesByPrice(price) {
    return courses.filter(course => course.price <= price);
}

function findCoursesByTitle(title) {
    return courses.filter(course => course.title.includes(title));
}

function getCoursesTitles() {
    return courses.map(course => course.title);
}

function getDiscountCourses() {
    return courses.map(course => {
        return {
            title: course.title,
            price: course.price * 0.85
        };
    });
}

function sortCoursesByPrice() {
    return courses.map(course => course).sort((a, b) => a.price - b.price);
}

function sortCoursesByRating() {
    return courses.map(course => course).sort((a, b) => b.rating - a.rating);
}

function sortCoursesByTitle() {
    return courses.map(course => course).sort((a, b) => a.title.localeCompare(b.title));
}

function calculateAvailableCourses() {
    let availableCourses = courses.filter(course => course.available === true);
    let totalSum = 0;
    let average = 0;

    for (let course of availableCourses) {
        totalSum += course.price;
    }

    if (availableCourses.length > 0) {
        average = totalSum / availableCourses.length;
    }

    return {
        total: totalSum,
        average: average,
        count: availableCourses.length
    };
}

do {
    let userChoice = +prompt(
        "1 - Пошук одного курсу за id.\n" +
        "2 - Виведення всіх курсів вибраної категорії.\n" +
        "3 - Пошук курсів за максимальною вартістю.\n" +
        "4 - Пошук курсів за частиною назви.\n" +
        "5 - Формування масиву назв курсів.\n" +
        "6 - Курси зі знижкою 15%.\n" +
        "7 - Сортування за зростанням вартості.\n" +
        "8 - Сортування за спаданням рейтингу.\n" +
        "9 - Сортування за назвою.\n" +
        "10 - Загальна та середня вартість доступних курсів.\n" +
        "0 - Завершити роботу."
    );

    if (userChoice === 0) {
        break;
    }

    if (userChoice === 1) {
        let userID = +prompt("Введіть ID курсу, який хочете знайти:");

        if (isNaN(userID) || userID <= 0 || userID % 1 !== 0) {
            alert("Введіть коректний ID - додатне ціле число.");
        } else {
            let foundCourse = findCourseById(userID);

            if (foundCourse) {
                let availability = "Ні";

                if (foundCourse.available) {
                    availability = "Так";
                }

                alert(`Назва: ${foundCourse.title}\nКатегорія: ${foundCourse.category}\nВартість: ${foundCourse.price} грн\nТривалість: ${foundCourse.duration} год\nРейтинг: ${foundCourse.rating}\nДоступний: ${availability}`);
            } else {
                alert("Курс не знайдено.");
            }
        }
    } else if (userChoice === 2) {
        let userCategory = prompt("Введіть категорію курсів: Frontend або Backend");

        if (userCategory === null || userCategory.trim() === "") {
            alert("Категорію не введено.");
        } else {
            let foundCourses = findCoursesByCategory(userCategory.trim());

            if (foundCourses.length > 0) {
                alert(`Знайдено курси в категорії "${userCategory}": ${foundCourses.map(course => course.title).join(", ")}`);
            } else {
                alert("Курси в обраній категорії не знайдено.");
            }
        }
    } else if (userChoice === 3) {
        let userPrice = prompt("Введіть максимальну вартість курсу:");

        if (userPrice === null || userPrice.trim() === "") {
            alert("Вартість не введено.");
        } else if (isNaN(userPrice) || !isFinite(userPrice) || +userPrice < 0) {
            alert("Введіть коректну невід'ємну вартість.");
        } else {
            userPrice = +userPrice;
            let foundCourses = findCoursesByPrice(userPrice);

            if (foundCourses.length > 0) {
                alert(`Знайдено курси з вартістю до ${userPrice} грн: ${foundCourses.map(course => course.title).join(", ")}`);
            } else {
                alert("Курси з вказаною вартістю не знайдено.");
            }
        }
    } else if (userChoice === 4) {
        let userTitle = prompt("Введіть назву курсу або її частину:");

        if (userTitle === null || userTitle.trim() === "") {
            alert("Назву не введено.");
        } else {
            let foundCourses = findCoursesByTitle(userTitle.trim());

            if (foundCourses.length > 0) {
                alert(`Знайдено курси, які містять "${userTitle}": ${foundCourses.map(course => course.title).join(", ")}`);
            } else {
                alert("Курси з вказаною назвою не знайдено.");
            }
        }
    } else if (userChoice === 5) {
        let coursesTitles = getCoursesTitles();
        alert(coursesTitles.join(", "));
    } else if (userChoice === 6) {
        let coursesDiscount = getDiscountCourses();
        alert(coursesDiscount.map(course => `${course.title} - ${course.price} грн`).join("\n"));
    } else if (userChoice === 7) {
        let coursesSortedByPrice = sortCoursesByPrice();
        alert(coursesSortedByPrice.map(course => `${course.title} - ${course.price} грн`).join("\n"));
    } else if (userChoice === 8) {
        let coursesSortedByRating = sortCoursesByRating();
        alert(coursesSortedByRating.map(course => `${course.title} - рейтинг: ${course.rating}`).join("\n"));
    } else if (userChoice === 9) {
        let coursesSortedByTitle = sortCoursesByTitle();
        alert(coursesSortedByTitle.map(course => course.title).join(", "));
    } else if (userChoice === 10) {
        let result = calculateAvailableCourses();

        if (result.count > 0) {
            alert(`Загальна вартість доступних курсів: ${result.total} грн.\nСередня вартість доступних курсів: ${result.average} грн.`);
        } else {
            alert("Доступних курсів немає.");
        }
    } else {
        alert("Оберіть пункт меню від 0 до 10.");
    }
} while (confirm("Повернутися до меню?\nОК - повернутися, Скасувати - завершити."));