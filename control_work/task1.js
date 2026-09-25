let age = +prompt("What is your age?");
let day = +prompt("Оберіть день:\n1 - будній,\n2 - вихідний");
let price = 0;
let discountedPrice = 0;
switch (day) {
    case 1:
        price = 200;
        break;
    case 2:
        price = 250;
        break;
}
if(age<=7 && age>=0){
    discountedPrice = 0;
}else if(age>=8 && age<=17){
    discountedPrice = price * 0.5;
}else if(age>=18 && age<=59){
    discountedPrice = price;
}else if(age>=60){
    discountedPrice = price * 0.6;
}else{
    console.log("Неправильний вік")
}
if(age>=0){
    console.log(`Вік: ${age}\nДень: ${day}\nРезультат ${discountedPrice}`);}