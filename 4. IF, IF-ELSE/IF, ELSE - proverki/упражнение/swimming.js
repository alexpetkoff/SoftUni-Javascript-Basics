function swimming(input) {
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let time = Number(input[2]);
    let slowing = Math.floor((meters / 15)) * 12.5;
    let score = meters * time + slowing;

    if (score < record) {
        console.log(` Yes, he succeeded! The new world record is ${(score).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(score - record).toFixed(2)} seconds slower.`);
    }
}

swimming(["55555.67",
    "3017",
    "5.03"]);
