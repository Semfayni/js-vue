// alert("Hello World.");
// let age = 18;
// const name = 'Ivan';
// console.log(age);
// console.log(name);
//
// age = 19;

// const name = 'Ivan';
// let number = 0;
// let isTrue = false;
//
// console.log(typeof name);

//+ -
//* / %
// **

// const name = prompt('What is your name?');
// let num1 = prompt('Input first number:');
// let num2 = prompt('Input second number:');
// console.log(Number(num1)+Number(num2));
// console.log((num1-0)+(num2-0));
//
// let num3= 100;
// console.log(String(num3));

let productName = prompt("Enter your product name");
let price = Number(prompt("Enter your price"));
let quantity = Number(prompt("Enter your quantity"));
let delivery = Number(prompt("Enter your delivery"));
let discount = Number(prompt("Enter your discount"));


let totalCost = price * quantity * (100-discount)/100 + delivery;
console.log(`Total cost: ${totalCost} uah. Product ${productName}`);
alert('Product' + productName +
"\nTotal cost: " + totalCost + " uah.");