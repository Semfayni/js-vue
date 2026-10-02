// function name(argument){
//     code
// }

// function showMessage() {
//     alert("Hello World!");
// }
// showMessage();

// function showInfo(){
//     console.log("Магазин працює з 9:00 до 18:00");
//     console.log("Смажені владіки")
// }
// function showProducts(name, price, count){
//     console.log(`Vladiki sell" ${name}`);
//     console.log(`Price: ${price} uah for 1 pcs`);
//     console.log(`Total price: ${price * count} uah for ${count} pcs`);
// }
// showInfo();
// showProducts("Grilled Vladiki", 100);

// function calculateTotal(price, count){
//     return price * count;
// }
//
// let total = calculateTotal(100, 5);
// console.log(`Total price: ${total} uah`);

// function discount(total){
//     if (total >= 5000){
//         return 10;
//     }else{
//         return 0;
//     }
// }
// let discount1 = discount(1000);
// let discount2 = discount(6000);
// console.log(discount1);
// console.log(discount2);

// function getProductTotal(price, count){
//     return price * count;
// }
//
// function getDiscount(total){
//     if (total >= 10000){
//         return 15;
//     }else if(total >= 5000){
//         return 10;
//     }else if(total >= 2000){
//         return 5;
//     }else{
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent){
//     return total * (percent / 100);
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("Enter your product name");
// let productPrice = +prompt("Enter your product price");
// let productCount = +prompt("Enter your product count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Product: ${productName}`);
// console.log(`Price per unit: ${productPrice} uah`);
// console.log(`Count: ${productCount}`);
// console.log(`Total price: ${productTotal} uah`);
// console.log(`Discount: ${productDiscountPercent}%`);
// console.log(`Discount value: ${productDiscountValue} uah`);
// console.log(`Final price: ${productFinalPrice} uah`);

//-------------------------------------------------------------------------------
function calculateTickets(price, count){
    return price * count;
}
function getTicketDiscount(total){
    if (total >= 1500){
        return 15;
    }else if (total >= 1000){
        return 10;
    }else if (total >= 500){
        return 5;
    }else{
        return 0;
    }
}
function calculateTicketsDiscount(total, percent){
    return total * (percent / 100);
}

function TicketFinalPrice(total, discount){
    return total - discount;
}
let ticketPrice = +prompt("Enter ticket price");
let ticketCount = +prompt("Enter ticket count");
let total = calculateTickets(ticketPrice, ticketCount);
let percent = getTicketDiscount(total);
let discount = calculateTicketsDiscount(total, percent);
let finalPrice = TicketFinalPrice(total, discount);

console.log(`Ticket price: ${ticketPrice} uah`);
console.log(`Ticket count: ${ticketCount}`);
console.log(`Total price: ${total} uah`);
console.log(`Discount: ${percent}%`);
console.log(`Discount value: ${discount} uah`);
console.log(`Final price: ${finalPrice} uah`);