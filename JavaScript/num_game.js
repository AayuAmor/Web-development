let GameNum=25;
let UserNum= parseInt( prompt("Enter a Number form 0-25:"));
//parseInt function is used to save the string value as Intizer value
while(GameNum!== UserNum){
    UserNum= parseInt( prompt("You Entered a Wrong Number \nEnter a Number form 0-25:"));
}
console.log(UserNum);
console.log("Congratulations !!!, You Entered The Right Number.");