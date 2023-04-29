function wordReading(input){

    let i = 0;
    let word = input[i];
    while (word !== "Stop"){
        console.log(word);
        i++;
        word = input[i];

    }
}

wordReading(["Aleksandar", "Krasimirov", "Petkov","wow", "Stop", "softuni"]);