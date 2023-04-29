function oldBook(input){
    let index = 0;
    let searchedBook = input[index];
    index++;
    let num = 0;
    while(true){
        if(input[index] == searchedBook){
            console.log(`You checked ${num} books and found it.`);
            break;
        }
        if(input[index] == "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${num} books.`);
            break;
        }
        index++;
        num++;
    }

}

oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])