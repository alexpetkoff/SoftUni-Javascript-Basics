function sumNumbers(input){
    let index = 1;
    let firstNumber = Number(input[0]);
    let sum = 0;
    
    while (sum < firstNumber){
        let otherNumber = Number(input[index]);
        sum += otherNumber;
        index++;
    }
    console.log(sum);
}

sumNumbers(["100", "50", "25", "30","50"]);