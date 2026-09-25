let numStudents = +prompt("Введіть кількість студентів")
let avgGrade = 0;
let sumGrade = 0;
let numGoodGrades = 0;
let numBadGrades = 0;
let maxGrade = 0;
let sentenceGrade = "Оцінки: ";
for(let i = 1; i <= numStudents; i++){
    let Grade = +prompt("Введіть оцінку")
    sumGrade += Grade;
    sentenceGrade = sentenceGrade + Grade + " ";
    if(Grade < 7 && Grade >= 0){
        numBadGrades += 1;
    }else if(Grade <= 12 && Grade >= 7){
        numGoodGrades += 1;
    }
    if (Grade > maxGrade){
        maxGrade = Grade;
    }
}
avgGrade = sumGrade/numStudents;
console.log(`Кількість учнів: ${numStudents}\n${sentenceGrade}\nРезультат: \nСума: ${sumGrade}\nСередня: ${avgGrade}\nОцінок 7 і вище: ${numGoodGrades}\nОцінок нижче 7: ${numBadGrades}\nНайбільша оцінка: ${maxGrade}`);