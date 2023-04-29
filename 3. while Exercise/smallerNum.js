function smaller(input){

    let index = 0;
    let currentNum = Number(input[0]);

    while (input[index] !== "Stop"){
        if(Number(input[index]) < currentNum){
            currentNum = Number(input[index]);
        }
        index++;
    }
    console.log(currentNum);

}
smaller(['10', '-80', '-992', '-201', 'Stop']);