function sales(input) {
    let town = String(input[0]);
    let saleQuantity = Number(input[1]);

    if (town === 'Sofia') {
        if (saleQuantity < 0) {
            console.log("error");
        } else if (saleQuantity <= 500) {
            console.log(((saleQuantity * 5) / 100).toFixed(2));
        } else if (saleQuantity > 500 && saleQuantity <= 1000) {
            console.log(((saleQuantity * 7) / 100).toFixed(2));
        } else if (saleQuantity > 1000 && saleQuantity <= 10000) {
            console.log(((saleQuantity * 8) / 100).toFixed(2));
        } else if (saleQuantity > 10000) {
            console.log(((saleQuantity * 12) / 100).toFixed(2));
        }
    } else if (town === "Plovdiv") {
        if (saleQuantity < 0) {
            console.log("error");
        } else if (saleQuantity <= 500) {
            console.log(((saleQuantity * 5.5) / 100).toFixed(2));
        } else if (saleQuantity > 500 && saleQuantity <= 1000) {
            console.log(((saleQuantity * 8) / 100).toFixed(2));
        } else if (saleQuantity > 1000 && saleQuantity <= 10000) {
            console.log(((saleQuantity * 12) / 100).toFixed(2));
        } else if (saleQuantity > 10000) {
            console.log(((saleQuantity * 14.5) / 100).toFixed(2));
        }

    } else if (town === "Varna") {
        if (saleQuantity < 0) {
            console.log("error");
        } else if (saleQuantity <= 500) {
            console.log(((saleQuantity * 4.5) / 100).toFixed(2));
        } else if (saleQuantity > 500 && saleQuantity <= 1000) {
            console.log(((saleQuantity * 7.5) / 100).toFixed(2));
        } else if (saleQuantity > 1000 && saleQuantity <= 10000) {
            console.log(((saleQuantity * 10) / 100).toFixed(2));
        } else if (saleQuantity > 10000) {
            console.log(((saleQuantity * 13) / 100).toFixed(2));
        }
    } else {
        console.log("error");
    }
}
sales(["Varna",
    "3874.50"]);

