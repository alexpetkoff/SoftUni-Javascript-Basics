function sumOfNumbers(input){

    let number = input[0];
    sum = 0;
    for(i = 0; i < number.length ; i++){
        let digit = Number(number[i]);
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);