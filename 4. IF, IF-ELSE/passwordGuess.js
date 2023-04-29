function passGuess(input){
 let pass = "s3cr3t!P@ssw0rd";
 if(input[0] == pass){
    console.log("Welcome");
 }else{
     console.log("Wrong Password!")
 }
}
passGuess(["s3cr3!P@ssw0rd"])