const rightPIN = 2026;
let numberTries = 3;
while(numberTries > 0) {
    let userPIN = +prompt("Введіть ПІН-код");
    if(userPIN === rightPIN) {
        console.log("Доступ дозволено");
        break;
    }else{
        numberTries -= 1;
        alert(`Неправильний ПІН. Залишилось спроб: ${numberTries}`);
    }
}
if(numberTries === 0) {
    console.log("Доступ заблоковано");
}