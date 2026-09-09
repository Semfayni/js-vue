// let age = prompt("Enter your age");
// let access = confirm("Are you registered?");
//
// if(age >= 18 && access === true){
//     alert("Welcome!")
// }else{
//     alert("Access denied")
// }

// let accessType = prompt("What is your access type?");
// if(accessType == "admin"){
//     alert("Welcome, admin!");
// }else{
//     alert("Denied");
// }

// let access = confirm("Are you registered?");
// if(access === true){
//     let age = prompt("What is your age?");
//     if(age>=18){
//         alert("Welcome");
//     }else{
//         alert("Access denied");
//     }
// }else{
//     alert("Access denied")
// }

// let age = Number(prompt("Enter your age"));
// if (age < 6) {
//     alert("You are a baby!");
// } else if (age < 13) {
//     alert("You are a student!");
// } else if (age < 20) {
//     alert("You are a teen!");
// } else if (age < 60) {
//     alert("You are an adult!");
// } else {
//     alert("You are a senior!");
// }

// let age = prompt('Enter your age');
// if (age >= 18) {
//     alert("You can drink smoke etc.");
// } else if (age <= 18) {
//     let access = confirm("Does your mama allows you to drink")
//     if(access){
//         alert("You can drink smoke etc.");
//     }else{
//         alert("You CANNOT drink smoke etc.");
//     }
// }

let name = prompt("What is products name?");
let price = Number(prompt("Enter the price of the product"));
let quantity = Number(prompt("Enter the quantity of the product"));
let register = confirm("Are you registered");
let promo = prompt("Enter your promo code");
const realPromo = "PROMO2024";
const discount = 0.1;
let VIP = confirm("Are you a VIP member?");
if (register === true && price*quantity>=1000 && (promo === realPromo || VIP)){
    alert(`You have to pay for ${name}: ` + (price * quantity - (price * quantity * discount)));
}else{
    alert(`You have to pay for ${name}: ` + (price * quantity));
}