function GameShop(input){
    let numGames = Number(input[0]);
    index = 1;
    let count = 1;
    let hearthStone = 0;
    let fortnite = 0;
    let overwatch = 0;
    let others = 0;
    while(count <= numGames){
       if(input[index] === "HearthStone"){
        hearthStone++;
       }
       if(input[index] === "Fortnite"){
        fortnite++;
       }
       if(input[index] === "Overwatch"){
        overwatch++;
       } 
       if(input[index] != "HearthStone" && input[index] != "Fortnite" && input[index] != "Overwatch") {
        others++;
       }
       index++;
       count++;
    }
    console.log(`Hearthstone - ${(hearthStone*100/numGames).toFixed(2)}%`);
    console.log(`Fortnite - ${(fortnite*100/numGames).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch*100/numGames).toFixed(2)}%`);
    console.log(`Others - ${(others*100/numGames).toFixed(2)}%`);

}
GameShop(["3","Diablo 2","HearthStone","Star-craft 2"]);
