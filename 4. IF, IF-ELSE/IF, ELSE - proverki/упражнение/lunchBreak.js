function lunchBreak(input) {
    let sitcomName = input[0];
    let sitcomLenght = Number(input[1]);
    let breakLenght = Number(input[2]);

    let lunchTime = breakLenght * 1 / 8;
    let relaxTime = breakLenght * 1 / 4;
    let funTimeTotal = lunchTime + relaxTime + sitcomLenght;

    if (funTimeTotal <= breakLenght) {
        console.log(`You have enough time to watch ${sitcomName} and left with ${Math.ceil(breakLenght - funTimeTotal)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${sitcomName}, you need ${Math.ceil(funTimeTotal - breakLenght)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"]);