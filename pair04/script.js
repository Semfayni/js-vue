// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i -= 2) {
//     console.log(i);
// }

// let sum = 0;
// for (let i = 0; i <= 30; i++) {
//     sum += i;
//     console.log(sum);
// }

// ------------------------------------------------#1
// let sum = 0;
// for (let i = 0; i <= 50; i+=2) {
//     sum += i;
// }
// console.log(sum);
// -------------------------------------------------
// let count = 0;
// for (let i = 1; i <=100; i++){
//     if (i%3 === 0){
//         count++;
//     }
// }
// console.log(count);

// for (let i = 1; i <= 100; i++) {
//     if(i>20 && i%4===0 && i%6===0){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let studentCount = +prompt('Enter your student count');
// if (studentCount > 0) {
//     let sum = 0, highLevel = 0, others = 0;
//     for (let i = 1; i <= studentCount; i++) {
//         let grade = +prompt('Enter your student grade');
//         if (!(grade >=1 && grade <=12)){
//             alert("Error!");
//             i--;
//             continue;
//         }
//         if (grade >= 7) {
//             highLevel++;
//         } else {
//             others++;
//         }
//         sum += grade;
//     }
//     console.log(sum);
//     console.log(sum / studentCount);
//     console.log(highLevel);
//     console.log(others);
// }
//------------------------------------------------------------#2

let userCount = +prompt('Enter your user count');
if (userCount > 0) {
    let sum = 0, highLevel = 0, middleLevel = 0, others = 0, max = 0, min = 100, firstHundred = 0;
    for (let i = 1; i <= userCount; i++) {
        let grade = +prompt('Enter your grade');
        if (!(grade >=0 && grade <=100)) {
            alert("Error!");
            i--;
            continue;
        }
        if(grade === 100 && firstHundred === 0){
            firstHundred = i;
        }
        if (grade > max) {
            max = grade;
        }
        if (grade < min) {
            min = grade;
        }
        if (grade >= 90 && grade <= 100) {
            highLevel++;
        }else if (grade < 90 && grade >= 60) {
            middleLevel++;
        }else{
            others++;
        }
        sum += grade;
    }
    console.log(`Середнє: ${sum/userCount}`);
    console.log(`Максимум: ${max}`);
    console.log(`Мінімум: ${min}`);
    if (firstHundred === 0) {
        console.log("Ніхто не отримав 100 балів");
    } else {
        console.log(`Номер першого учасника з оцінкою 100: ${firstHundred}`);
    }
    console.log(`Кількість учасників з оцінкою 90-100: ${highLevel}`);
    console.log(`Кількість учасників з оцінкою 60-89: ${middleLevel}`);
    console.log(`Кількість учасників з оцінкою 0-59: ${others}`);
}