function petShop(input){
    let catsFood = 4;
    let dogsFood = 2.5;
    let total = (input[0] * dogsFood) + (input[1] * catsFood);
    console.log(`${total} lv.`)
}
petShop([13 ,9])