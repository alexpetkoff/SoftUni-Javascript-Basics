function sumSeconds(input) {
    let contenderOne = Number(input[0]);
    let contenderTwo = Number(input[1]);
    let contenderThree = Number(input[2]);

    let totalTime = contenderOne + contenderTwo + contenderThree;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(["22", "7", "34"]);