function numbers(input){

let a = Number(input[0]);
let b = Number(input[1]);
let sum = 0;
let numbers = "";
for (let i = a; i <= b; i++){
    if (i % 9 == 0){
        sum += i;
        numbers += i + '\n';
    }
}
console.log(`The sum: ${sum}`);
console.log(numbers);

}

numbers(["100", "200"]);