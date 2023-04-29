function operations(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operator = input[2];
    let result;

    switch (operator) {

        case "+":

            result = numberOne + numberTwo;
            if (result % 2 == 0) {
                console.log(`${numberOne} + ${numberTwo} = ${result} - even`);
            } else {
                console.log(`${numberOne} + ${numberTwo} = ${result} - odd`);
            } break;

        case "-":

            result = numberOne - numberTwo;
            if (result % 2 == 0) {
                console.log(`${numberOne} - ${numberTwo} = ${result} - even`);
            } else {
                console.log(`${numberOne} - ${numberTwo} = ${result} - odd`);
            } break;

        case "*":

            result = numberOne * numberTwo;
            if (result % 2 == 0) {
                console.log(`${numberOne} * ${numberTwo} = ${result} - even`);
            } else {
                console.log(`${numberOne} * ${numberTwo} = ${result} - odd`);
            } break;

        case "/":

            result = (numberOne / numberTwo).toFixed(2);
            if (numberOne == 0) {
                console.log(`Cannot divide ${numberTwo} by zero`);
            } else if (numberTwo == 0) {
                console.log(`Cannot divide ${numberOne} by zero`);
            } else console.log(`${numberOne} / ${numberTwo} = ${result}`);
            break;

        case "%":

            result = numberOne % numberTwo;
            if (numberOne == 0) {
                console.log(`Cannot divide ${numberTwo} by zero`);
            } else if (numberTwo == 0) {
                console.log(`Cannot divide ${numberOne} by zero`);
            } else console.log(`${numberOne} % ${numberTwo} = ${result}`);
            break;
    }
}

operations(["123",
"12",
"/"]);