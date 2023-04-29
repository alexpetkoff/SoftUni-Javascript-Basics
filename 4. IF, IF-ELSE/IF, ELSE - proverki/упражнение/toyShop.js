function toyShop(input) {
    let priceTrip = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let numDolls = Number(input[2]);
    let numBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let totalPrice = (numPuzzles * 2.60) + (numDolls * 3) + (numBears * 4.10) + (numMinions * 8.20) + (numTrucks * 2);
    let totalToys = numPuzzles + numDolls + numBears + numMinions + numTrucks;
    if (totalToys >= 50) {
        totalPrice = totalPrice - (totalPrice * 25) / 100;
    }
    totalPrice = totalPrice - (totalPrice * 10) / 100;
    if (totalPrice >= priceTrip) {
        console.log(`Yes! ${(totalPrice - priceTrip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceTrip - totalPrice).toFixed(2)} lv needed.`)
    }
}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])