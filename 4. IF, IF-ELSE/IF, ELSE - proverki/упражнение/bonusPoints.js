function bonusPoints(input) {
    let points = Number(input[0]);
    let bonusPoints = 0.0;

    if (points <= 100) {
        bonusPoints = 5;
    } else if (points > 1000) {
        bonusPoints = (points * 10) / 100;
    } else if (points > 100) {
        bonusPoints = (points * 20) / 100;
    }

    if (points % 2 == 0) {
        bonusPoints++;
    } else if (points % 5 == 0) {
        bonusPoints = bonusPoints + 2;
    }
    console.log(bonusPoints);
    console.log(bonusPoints + points);
}
bonusPoints(["15875"]);