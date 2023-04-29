function hotel(input) {
    let month = input[0];
    let days = Number(input[1]);
    let studio;
    let apartment;

    if (month === "May" || month === "October") {
        studio = 50 * days;
        apartment = 65 * days;
        if (days > 7 && days <= 14) {
            studio = studio - (studio * 5 / 100);
        } else if (days > 14) {
            studio = studio - (studio * 30 / 100);
            apartment = apartment - (apartment * 10 / 100);
        }
        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
    } else
        if (month === "June" || month === "September") {
            studio = 75.20 * days;
            apartment = 68.70 * days;
            if (days > 14) {
                studio = studio - (studio * 20 / 100);
                apartment = apartment - (apartment * 10 / 100);
            }
            console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
        }
        else
            if (month === "July" || month === "August") {
                studio = 76 * days;
                apartment = 77 * days;
                if (days > 14) {
                    apartment = apartment - (apartment * 10 / 100);
                }
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            }
}

hotel(["August",
    "20"]);