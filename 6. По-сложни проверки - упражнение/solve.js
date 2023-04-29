function ski(input) {
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let grade = input[2];

    let room = 18 * (days - 1);
    let apartment = 25 * (days - 1);
    let presidentAp = 35 * (days - 1);
    let price = 0;

    if (grade === 'positive') {
        if (days < 10) {
            switch (typeOfRoom) {
                case 'room for one person':
                    price = room + (room * 0.25); break;
                case 'apartment':
                    price = apartment - apartment * 0.30;
                    price = price + price * 0.25; break;
                case 'president apartment':
                    price = presidentAp - presidentAp * 0.10;
                    price = price + price * 0.25; break;
            }
        }
        else if (days >= 10 && days < 15) {
            switch (typeOfRoom) {
                case 'room for one person':
                    price = room + (room * 0.25); break;
                case 'apartment':
                    price = apartment - apartment * 0.35;
                    price = price + price * 0.25; break;
                case 'president apartment':
                    price = presidentAp - presidentAp * 0.15;
                    price = price + price * 0.25; break;
            }
        }
        else if (days >= 15) {
            switch (typeOfRoom) {
                case 'room for one person':
                    price = room + (room * 0.25); break;
                case 'apartment':
                    price = apartment - apartment * 0.50;
                    price = price + price * 0.25; break;
                case 'president apartment':
                    price = presidentAp - presidentAp * 0.20;
                    price = price + price * 0.25; break;
            }
        }
    } else if (grade === 'negative') {
        if (days < 10) {
            switch (typeOfRoom) {
                case 'room for one person':
                    price = room - (room * 0.10); break;
                case 'apartment':
                    price = apartment - apartment * 0.30;
                    price = price - price * 0.10; break;
                case 'president apartment':
                    price = presidentAp - presidentAp * 0.10;
                    price = price - price * 0.10; break;
            }
        }
        else if (days >= 10 && days < 15) {
            switch (typeOfRoom) {
                case 'room for one person':
                    price = room - (room * 0.10); break;
                case 'apartment':
                    price = apartment - apartment * 0.35;
                    price = price - price * 0.10; break;
                case 'president apartment':
                    price = presidentAp - presidentAp * 0.15;
                    price = price - price * 0.10; break;
            }
        }
        else if (days >= 15) {
            switch (typeOfRoom) {
                case 'room for one person':
                    price = room - (room * 0.10); break;
                case 'apartment':
                    price = apartment - apartment * 0.50;
                    price = price - price * 0.10; break;
                case 'president apartment':
                    price = presidentAp - presidentAp * 0.20;
                    price = price - price * 0.10; break;
            }
        }
    }

    console.log(price.toFixed(2));
}

ski(["30",
    "president apartment",
    "negative"]);