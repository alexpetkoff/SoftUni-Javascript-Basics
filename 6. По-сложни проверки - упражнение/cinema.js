function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let colomns = Number(input[2]);
    let income = 0;

    if (type == 'Premiere') {
        income = rows * colomns * 12.00;
    }
    else if (type == 'Normal') {
        income = rows * colomns * 7.50;
    }
    else if (type == 'Discount') {
        income = rows * colomns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);

}

cinema(['Premiere', '10', '12']);