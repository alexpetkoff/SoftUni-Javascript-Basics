function exam(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = (examHour * 60) + examMinute;
    let arrivalTime = (arrivalHour * 60) + arrivalMinute;
    let timeDifference = examTime - arrivalTime;


    if (timeDifference <= 30 && timeDifference >= 0) {
        console.log("On time");
    }
    else if (timeDifference > 30) {
        console.log("Early");
    }
    else {
        console.log("Late");
    }

    if (timeDifference > 0 && timeDifference < 60){
        console.log(`${timeDifference} minutes before the start`);
    } else if (timeDifference / 60 >= 1  && timeDifference % 60 < 10){
        console.log(`${Math.floor(timeDifference / 60)}:0${timeDifference % 60} hours before the start`);
    } else if (timeDifference / 60 >= 1  && timeDifference % 60 >= 10){
        console.log(`${Math.floor(timeDifference / 60)}:${timeDifference % 60} hours before the start`);
    } else if (timeDifference < 0 && timeDifference > -60){
        console.log(`${Math.abs(timeDifference)} minutes after the start`);
    } else if (timeDifference / 60 <= -1 && timeDifference % 60 > -10){
        console.log(`${(Math.floor(Math.abs(timeDifference) / 60))}:0${Math.abs(timeDifference % 60)} hours after the start`);
    } else if (timeDifference / 60 <= -1 && timeDifference % 60 < -10){
        console.log(`${(Math.floor(Math.abs(timeDifference) / 60))}:${Math.abs(timeDifference % 60)} hours after the start`);
    }

}



exam(["9",
    "00",
    "8",
    "30"]);