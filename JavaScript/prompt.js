// let num=prompt("Enter a Number:");

// if(num % 5 === 0){
//     console.log(num," is divisible by 5.");
// }
// else {
//     console.log(num, " is not divisible by 5.");
// }
let score=prompt("Enter your Score:");
let Grade;
if (score>=80 && score<=100){
    // console.log("Your Grade is A");
    Grade = "A";
}
else if (score<=79 && score>=70){
    // console.log("Your Grade is B");
    Grade="B";
}
else if (score<=69 && score>=60){
    // console.log("Your Grade is C");
    Grade = "C";
}
else if (score <=59 && score>=50){
    // console.log("Your Grade is D");
    Grade="D";
}
else if(score<=49 && score >=0){
    // console.log("Your Grade is F");
    Grade="F"
    console.log("On the basis of Your Score,\n Your Grade is",Grade);
    console.log("You Failed !!!");
}
else{
    console.log("Invalid Score Entered !!!");
}
if (Grade !== null && Grade !== "F") {
    console.log("On the basis of Your Score,\n Your Grade is",Grade);
}
