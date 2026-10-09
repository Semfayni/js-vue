// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// names.push("Mariia"); // adds in the end
//
// names.pop(); //deletes last
// names.unshift("Pavlo") //adds in the beginning
// names.shift(); // deletes first
//
// let names2 = names.slice(1, 3);
//
// console.log(names);
// console.log(names2);

// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// let deleted = names.splice(2, 1);
// console.log(deleted);
//
// names.splice(1, 0, "Seva");
//
// names.splice(0, 1, "Tetiana", "Nadiia")
// console.log(names);

// function register(name){
//     if (name.trim() === ""){
//         alert("Please enter your name");
//         return;
//     }
//     let exists = false;
//     for(let i = 0; i < event.length; i++){
//         if(event[i].trim() === name.trim()){
//             exists = true;
//             break;
//         }
//     }
//     if(exists){
//         alert("Name already exists: " + name);
//         return;
//     }
//     event.push(name);
//     alert("Participant registered: " + name);
// }
// function remove(name){
//     let index = -1;
//     for(let i = 0; i < event.length; i++){
//         if(event[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if(index === -1){
//         alert("Participant not found")
//     } else {
//         event.splice(index, 1);
//         alert("Participant deleted");
//     }
// }
// function count(){
//     alert("All of the participants: " + event.length);
// }
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// register("Slavik");
// register("Ann");
// register("   ");
// remove("Slavik");
// count();

// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];

// for(let i = 0; i < event.length; i++) {
//     console.log(event[i]);
// }
// for (let name of names){
//     console.log(name);
// }
// names.forEach(function (name) {
//     console.log(name);
// })

//№1----------------------------------------------------------
// let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
//
// names.push("Влад");
// names.unshift("Всеволод");
// names.pop();
// names.splice(2, 1, "Єгор");
//
// for(let i = 0; i < names.length; i++){
//     console.log((i + 1) + ". " + names[i]);
// }
//
// for(let name of names){
//     console.log(name);
// }
//
// names.forEach(function(name){
//     console.log(name + ": " + name.length);
// });

//№2----------------------------------------------------------
let prices = [120, 250, 180, 300, 150, 400];

let total = 0;

for(let i = 0; i < prices.length; i++){
    total += prices[i];
}
console.log("Загальний виторг: " + total + " грн");

let count = 0;

for(let price of prices){
    if(price >= 200){
        count++;
    }
}
console.log("Квитків від 200 грн: " + count);

let average = total / prices.length;
console.log("Середня ціна: " + average + " грн");

let sum2 = 0;
let count2 = 0;

prices.forEach(function(price){
    sum2 += price;

    if(price >= 200){
        count2++;
    }
});

console.log("Виторг через forEach: " + sum2);
console.log("Квитків через forEach: " + count2);