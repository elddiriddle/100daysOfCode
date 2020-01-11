function finalGrade(num1, num2, num3) {        
    num1 = Number(document.getElementById("midterm").value);
    num2 = Number(document.getElementById("final").value);
    num3 = Number(document.getElementById("homework").value);
    let grade;
    let average = Math.floor((num1 + num2 + num3) / 3);
    if (average >= 0 && average <=59) {
        grade = "F";
    } else if (average >= 60 && average <=69) {
        grade = "D";
    } else if (average >= 70 && average <=79) {
        grade = "C";
    } else if (average >= 80 && average <=89) {
        grade = "B";
    } else {
        grade = "A";
    } 
    document.getElementById("avg-grade").innerHTML = `Grade Average: ${average}`;
    document.getElementById("letter-grade").innerHTML = `Letter Grade: ${grade}`;        
}