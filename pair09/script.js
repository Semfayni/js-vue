// let prices = [120, 23, 45, 60]
// console.log(prices[1])
//
// prices[1] = 50;
//
// console.log(prices.length);
//
// let sum = 0;
// for(let i = 0; i<prices.length; i++){
//     console.log(prices[i]);
//     sum += prices[i];
// }

// function getTotalPrice(prices){
//     let sum = 0;
//     for(let i = 0; i < prices.length; i++){
//         sum += prices[i]
//     }
//     return sum;
// }
// let prices = [120, 23, 45, 60, 55]
// let result = getTotalPrice(prices);
// console.log(result);
//----------------------
// function getLimit(prices){
//     let biggerLimit = 0;
//     for(let i = 0; i < prices.length; i++){
//         if(prices[i] > limit){
//             biggerLimit++;
//         }
//     }
//     return biggerLimit;
// }
// let prices = [120, 23, 45, 60, 55]
// let limit = 50;
// let result = getLimit(prices);
// console.log(result);

function Numbers(){
    let twoNumbers = [];
    let listNumbers = [];
    let askNumbers = +prompt("How many numbers are?");
    for(let i = 0; i < askNumbers; i++){
        let number = +prompt("Say number");
        listNumbers.push(number);
    }
    for(let i = 0; i < listNumbers.length; i++){
        if(listNumbers[i] % 2 === 0){
            twoNumbers.push(listNumbers[i]);
        }
    }
    return twoNumbers;
}
let twoNumbers = Numbers();
console.log(twoNumbers);