function grad(input){

    let name = input[0];
    index = 1;
    let grade = Number(input[index]);
    let classYear = 1;
    let badGrade = 0;
    let avgGrade = 0;
    disq = false;

    while(classYear <= 12){
        grade = Number(input[index]);
        if (grade >= 4){
            classYear++;
            avgGrade = avgGrade + grade;
            index++;
            continue;
        } else {
            badGrade++;
            index++;
            if(badGrade > 1){
                disq = true;
                console.log(`${name} has been excluded at ${classYear} grade`); break;
            }
            continue;
        }
    }
    if (disq != true){
        console.log(`${name} graduated. Average grade: ${(avgGrade/12).toFixed(2)}`)
    }
}
grad(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5","6","5"])