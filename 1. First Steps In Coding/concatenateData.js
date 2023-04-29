function concatenateData(input){

    console.log(`You are ${input[0]} ${input[1]}, a ${input[2]}-years old person from ${input[3]}.`);

}
concatenateData(["Maria", "Ivanova", 20, "Sofia"]);

// Втори вариант

function concatenate(input){
    let firstName = input[0];
    let secondName = input[1];
    let age = input[2];
    let town = input[3];
    console.log("You are " + firstName + " " + secondName + ", a " + age + "-years old person from " + town +".");
}
concatenate(["Maria", "Ivanova", 20, "Sofia"]);