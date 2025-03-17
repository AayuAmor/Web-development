let obj={
    item:"pen",
    price:10,
};
let output=`The cost of the ${obj.item} is ${obj.price} rupees`;
//This is called String_Interpolation in Template Literals in js. ${obj.item} is a place holder of the string.
console.log(output);
 // Instead of 
 console.log("The cost of",obj.item,"is", obj.price, "rupees");

 //Embading expression in Template Literals
 let expression=`sum of 1, 2, 3 = ${1+2+3}`;// ${1+2+3} is a expression that is being embaded here. 
 // First the value in the ${1+2+3} is being calculated then it becomes the part of the string.
 console.log(expression);

 // Escape Characters
 let sentence=`This is Me \n Aayush \t Dada`;// here \n and \t are escape charater for next line and a tab.... 
 // \t is a single character so don't consider it as two_\_t.
console.log(sentence);
console.log(sentence.length);
