function exam(input){

    let badGradesNum = Number(input[0]);
    let badGradesCount = 0; 
    let averageGrade = 0; // sredna ocenka
    let index = 1;
    let problemsCount = 0;
    
    while(true){
        
        if (Number(input[(index + 1)]) <= 4){
            badGradesCount++;
            problemsCount++;
            averageGrade += Number(input[(index + 1)]);
            index+=2;
         if (badGradesCount == badGradesNum){           
              console.log(`You need a break, ${badGradesCount} poor grades.`);
              break;
            }
            continue;
        }
        
        if (input[index] == "Enough"){
            console.log(`Average score: ${averageGrade.toFixed(2)/problemsCount}`);
            console.log(`Number of problems: ${problemsCount}`);
            console.log(`Last problem: ${input[(index - 2)]}`);
            break;
        }
        averageGrade += Number(input[(index + 1)]);
        problemsCount++;
        index+=2;
        
    }
}
exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])