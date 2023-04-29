function examProblems(input) {
    let lowGrades = 0;
    let sum = 0;
    let index = 0;
    let NumProblems = 0;
    let lowNum = Number(input[0]);
    while (true) {
        index++;
        if (Number(input[index + 1] <= 4)) {
            lowGrades++;
        }
        if (lowGrades === lowNum) {
            console.log(`You need a break, ${lowGrades} poor grades.`);
            break;
        }
        if (input[index] === "Enough") {
            let averageSum = sum / NumProblems;
            console.log(`Average score: ${averageSum.toFixed(2)}`);
            console.log(`Number of problems: ${NumProblems}`);
            console.log(`Last problem: ${input[index - 2]}`);
            break;
        }
        sum += Number(input[index + 1]);
        NumProblems++
        index++
    }
}

examProblems(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])