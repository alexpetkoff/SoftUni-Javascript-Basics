function projectsCreation(input){
    let name = input[0];
    let projectNumbers = input[1];
    console.log(`The architect ${name} will need ${projectNumbers * 3} hours to complete ${projectNumbers} project/s.`);
}
projectsCreation(["Sanya", 9]);