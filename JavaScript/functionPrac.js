let word = prompt("Enter a Word:");

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); // Convert to lowercase for case insensitivity
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);
            count++;
        }
    }
    return count; // Return the count of vowels
}

let result = countVowels(word);
console.log("Total vowels:", result);
