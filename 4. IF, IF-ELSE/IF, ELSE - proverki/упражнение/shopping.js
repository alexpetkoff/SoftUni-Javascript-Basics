function shopping(input) {
    let budget = Number(input[0]);
    let processors = Number(input[2]);
    let videoCards = Number(input[1]);
    let ram = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorsPrice = processors * (videoCardsPrice * 35 / 100);
    let ramPrice = ram * (videoCardsPrice * 10 / 100);
    let totalPrice = videoCardsPrice + processorsPrice + ramPrice;

    if (videoCards > processors) {
        totalPrice = totalPrice - (totalPrice * 15 / 100);
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45",
    "3",
    "1",
    "1"]);