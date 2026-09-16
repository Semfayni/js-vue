// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// let userNumber = +prompt('Enter your number');
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt('Please enter a number between 1 and 10');
// }
// console.log(userNumber);
// Number();
// String();
// isNaN();
// console.log(Number("7"));
// console.log(Number("hello"));

// let age = +prompt("Enter your age number");
// while (Number.isNaN(age) || age<=0 || age>=100){
//     age = +prompt("Enter your age number");
// }
// console.log(age);

// const correctPIN = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
// while(attempt < 3 && pin !== correctPIN) {
//     pin = +prompt('Enter a valid pin');
//     attempt++;
// }
// if (pin === correctPIN) {
//     console.log("Access granted");
// }else{
//     console.log("Access denied");
// }
// let password = 1234;
// let attempt = 1;
// while (attempt <= 3) {
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword) {
//         console.log("Access granted")
//         break;
//     }
//     console.log("Wrong password");
//     attempt++;
// }
//______________________________________________________
// let password = 1234;
// let attempt = 1;
// while (attempt <= 3) {
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword) {
//         console.log("Access granted")
//         break;
//     }
//     console.log(`Wrong password. Attempts left: ${3-attempt}`);
//     attempt++;
// }
// let menuChoice;
// do{
//     menuChoice = +prompt("What is your choice:\n" +
//     "1 - Profile\n" + "2 - Settings \n" + "0 - Leave");
//     if (menuChoice === 1){
//         alert("Open Profile");
//     }else if(menuChoice === 2){
//         alert("Open Settings");
//     }else if(menuChoice === 0){
//         alert("Leave");
//     }else {
//         alert("Unknown Choice");
//     }
// }
// while (menuChoice !== 0);
//_________________________________________________________
// let menuChoice;
// do{
//     menuChoice = +prompt("What is your choice:\n" + "1 - Profile\n" + "2 - Settings \n" + "3 - News\n" + "4 - Cool facts\n" + "0 - Leave");
//     switch(menuChoice){
//         case 1:
//             alert("Open Profile");
//             break;
//         case 2:
//             alert("Open Settings");
//             break;
//         case 3:
//             alert("Open News");
//             break;
//         case 4:
//             alert("Open Cool facts");
//             break;
//         case 0:
//             alert("Leave");
//             break;
//         default:
//             alert("Unknown Choice");
//     }
// }
// while(menuChoice !== 0)

// let count = 0, sum = 0;
// while (count < 5) {
//     let currentGrade = +prompt(`Enter grade № ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert("Wrong grade");
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum/5);

// let questionsNum = 1;
// let score = 0;
// while(questionsNum <= 5) {
//     let questions = "", answers = "";
//     switch (questionsNum) {
//         case 1:
//             questions = "How to create a variable?";
//             answers = "let";
//             break;
//         case 2:
//             questions = "What is the operator of strict equality?";
//             answers = "===";
//             break;
//         case 3:
//             questions = "What id the operator of *and*?"
//             answers = "&&";
//             break;
//         case 4:
//             questions = "How to end the cycle?";
//             answers = "break";
//             break;
//         case 5:
//             questions = "How to write increment";
//             answers = "++";
//             break;
//     }
//     let answer = prompt(`Question №${questionsNum} out of 5\n${questions}`);
//     if (answer === "") {
//         console.log("The answer cannot be blank");
//         continue;
//     }
//     if (answer === answers) {
//         alert("Right answer")
//         score++;
//     }else{
//         alert("Wrong answer")
//     }
//     questionsNum++;
// }
// if (score === 5){
//     alert("Excellent score")
// }else if(score >= 3){
//     alert("Normal score")
// }else{
//     alert("Loser")
// }

const correctPIN = 4321;
let attempt = 1;
let age = +prompt('Enter your age');
while (age < 12 || age > 90) {
    age = +prompt('Enter your age');
}
while (attempt <= 3){
    let answerPIN = +prompt('Enter your PIN');
    if (answerPIN === correctPIN){
        let menuChoice;
        do{
            menuChoice = +prompt("What is your choice:\n" + "1 - Profile\n" + "2 - Messages \n" + "3 - Settings\n" + "0 - Leave");
            switch(menuChoice){
                case 1:
                    alert("Open Profile");
                    break;
                case 2:
                    alert("Open Messages");
                    break;
                case 3:
                    alert("Open Settings");
                    break;
                case 0:
                    alert("Leave");
                    break;
                default:
                    alert("Unknown Choice");
            }
        }
        while(menuChoice !== 0)

        break;
    }else{
        alert(`Wrong PIN. Attempts left: ${3-attempt}`);
        attempt++;
    }
}