function con(){
    let i = 1; 

    while (i <=10){
        if( i % 2 !== 0 ){
            i++;
            console.log(i);
            continue;
        }
        i++;
    }
}

con();