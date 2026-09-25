const maxAuto = 7;
let price = 0;
let sumPrice = 0;
let electroCars = 0;
let maxPrice = 0;
let numCars = 0;
for(i = 1; i <= maxAuto; i++) {
    let parkHour = +prompt("Введіть кількість годин стоянки");
    if(parkHour === 0) {
        break;
    }
    if(parkHour > 12 || parkHour < 0) {
        i--;
        continue;
    }

    let autoType = +prompt("Тип автомобіля:\n1 - звичаний\n2 - електромобіль");
    if(!(autoType === 1 || autoType === 2)) {
        i--;
        continue;
    }

    switch(autoType) {
        case 1:
            price = 40 * parkHour;
            if(parkHour > 5){
                price = price * 0.8
            }
            break;
        case 2:
            price = 30 * parkHour;
            if(parkHour > 5){
                price = price * 0.8
            }
            electroCars++;
            break;
    }
    if(price>maxPrice){
        maxPrice = price;
    }
    sumPrice += price;
    numCars++;
}
console.log(`Кількість правильно оброблених автомобілів: ${numCars}\nКількість електромобілів: ${electroCars}\nЗагальна сума оплати: ${sumPrice}\nНайбільшу оплата за один автомобіль: ${maxPrice}`);

