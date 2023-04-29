function movie(input) {
    let budget = Number(input[0]);
    let personel = Number(input[1]);
    let priceClothes = Number(input[2]);
    let dekor = budget * 0.1;

    if (personel > 150) {
        priceClothes = priceClothes - priceClothes * 0.10;
    }

    let totalPriceClothes = priceClothes * personel;
    let sum = totalPriceClothes + dekor;

    if (sum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`)
    } else if (budget >= sum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    }
}

movie(["9587.88",
    "222",
    "55.68"]);