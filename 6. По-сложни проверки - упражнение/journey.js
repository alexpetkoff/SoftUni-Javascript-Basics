function journey(input){

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let tripPrice ;

    if(budget <= 100){
        destination = "Bulgaria";
        switch(season){
            case "summer": 
                tripPrice = ((budget * 30)/100).toFixed(2);
                console.log(`Somewhere in ${destination}`);
                console.log(`Camp - ${tripPrice}`); break;
            case "winter": 
                tripPrice = ((budget * 70)/100).toFixed(2);
                console.log(`Somewhere in ${destination}`);
                console.log(`Hotel - ${tripPrice}`); break;
        }
    } else if(budget > 100 && budget <=1000){
        destination = "Balkans";
        switch(season){
            case "summer": 
                tripPrice = ((budget * 40)/100).toFixed(2);
                console.log(`Somewhere in ${destination}`);
                console.log(`Camp - ${tripPrice}`); break;
            case "winter": 
                tripPrice = ((budget * 80)/100).toFixed(2);
                console.log(`Somewhere in ${destination}`);
                console.log(`Hotel - ${tripPrice}`); break; 
        }
    } else if(budget > 1000){
        destination = "Europe";
        tripPrice = ((budget * 90)/100).toFixed(2);
        console.log(`Somewhere in ${destination}`);
        console.log(`Hotel - ${tripPrice}`);
    }

}

journey(["678.53", "winter"]);
