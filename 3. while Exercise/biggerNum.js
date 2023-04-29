function biggerNum(input){

    let index = 0;
    let currentNum = Number(input[0]);

    while (input[index] !== "Stop"){
        if(Number(input[index]) > currentNum){
            currentNum = Number(input[index]);
        }
        index++;
    }
    console.log(currentNum);

}
biggerNum(['Stop', '-80', '-992', '-201', 'Stop']);