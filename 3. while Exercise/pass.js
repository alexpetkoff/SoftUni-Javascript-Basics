function pass(input){

    let user = input[0];
    let pass = input[1];
    let data = input[2];
    let i = 3;
    while(data != pass){
        data = input[i];
        i++;
    }
    console.log(`Welcome ${user}!`);

}

pass(["Aleks", "123456","hhuhiihu","2131231321", "123456"]);