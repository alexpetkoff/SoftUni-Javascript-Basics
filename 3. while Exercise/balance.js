function balance(input) {

    let total = 0;
    let index = 0;

    while (input[index] != "NoMoreMoney") {
        if (Number(input[index]) < 0) {
            console.log("Invalid operation!"); break;
        }
        console.log(`Increase: ${Number(input[index]).toFixed(2)}`)
        total = total + Number(input[index]);
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);

}
balance(["5.51", "69.42", "100", "NoMoreMoney"]);