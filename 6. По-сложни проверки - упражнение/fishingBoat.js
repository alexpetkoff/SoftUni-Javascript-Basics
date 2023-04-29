function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);
    let boatPrice = 0;

    switch (season) {
        case 'Spring':
            boatPrice = 3000;
            if (fishersCount <= 6) {
                boatPrice = boatPrice - (boatPrice * 10) / 100;
            } else
                if (fishersCount > 7 && fishersCount <= 11) {
                    boatPrice = boatPrice - (boatPrice * 15) / 100;
                } else
                    if (fishersCount > 12) {
                        boatPrice = boatPrice - (boatPrice * 25) / 100;
                    } break;
        case 'Summer':
            boatPrice = 4200;
            if (fishersCount <= 6) {
                boatPrice = boatPrice - (boatPrice * 10) / 100;
            } else
                if (fishersCount > 7 && fishersCount <= 11) {
                    boatPrice = boatPrice - (boatPrice * 15) / 100;
                } else
                    if (fishersCount > 12) {
                        boatPrice = boatPrice - (boatPrice * 25) / 100;
                    } break;
        case 'Autumn':
            boatPrice = 4200;
            if (fishersCount <= 6) {
                boatPrice = boatPrice - (boatPrice * 10) / 100;
            } else
                if (fishersCount > 7 && fishersCount <= 11) {
                    boatPrice = boatPrice - (boatPrice * 15) / 100;
                } else
                    if (fishersCount > 12) {
                        boatPrice = boatPrice - (boatPrice * 25) / 100;
                    } break;
        case 'Winter':
            boatPrice = 2600;
            if (fishersCount <= 6) {
                boatPrice = boatPrice - (boatPrice * 10) / 100;
            } else
                if (fishersCount > 7 && fishersCount <= 11) {
                    boatPrice = boatPrice - (boatPrice * 15) / 100;
                } else
                    if (fishersCount > 12) {
                        boatPrice = boatPrice - (boatPrice * 25) / 100;
                    } break;
    }
    if (fishersCount % 2 == 0 && season != "Autumn") {
        boatPrice = boatPrice - (boatPrice * 5) / 100;
    }
    if (budget >= boatPrice) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3600",
"Autumn",
"6"]);