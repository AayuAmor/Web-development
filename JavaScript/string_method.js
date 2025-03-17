let fullName= prompt("Enter Your FullName Without Space:");
console.log(`@${fullName}${fullName.length}`);

//String Methods
let str = "  Hello world world  ";

// 1. Length
console.log("Length:", str.length);

// 2. toUpperCase()
console.log("Uppercase:", str.toUpperCase());

// 3. toLowerCase()
console.log("Lowercase:", str.toLowerCase());

// 4. charAt()
console.log("Character at index 1:", str.charAt(1));

// 5. indexOf()
console.log("Index of 'world':", str.indexOf("world"));

// 6. lastIndexOf()
console.log("Last index of 'world':", str.lastIndexOf("world"));

// 7. includes()
console.log("Contains 'world'?", str.includes("world"));

// 8. startsWith()
console.log("Starts with 'Hello'?", str.trim().startsWith("Hello"));

// 9. endsWith()
console.log("Ends with 'world'?", str.trim().endsWith("world"));

// 10. slice()
console.log("Slice (0,5):", str.slice(0, 5));

// 11. substring()
console.log("Substring (0,5):", str.substring(0, 5));

// 12. substr()
console.log("Substr (0,5):", str.substr(0, 5));

// 13. trim()
console.log("Trimmed:", str.trim());

// 14. replace()
console.log("Replace 'world' with 'JS':", str.replace("world", "JS"));

// 15. replaceAll()
console.log("Replace all 'world' with 'JS':", str.replaceAll("world", "JS"));

// 16. split()
console.log("Split by space:", str.trim().split(" "));

// 17. repeat()
console.log("Repeat 3 times:", "Hello ".repeat(3));

// 18. padStart()
console.log("PadStart (3, '0'):", "5".padStart(3, "0"));

// 19. padEnd()
console.log("PadEnd (3, '0'):", "5".padEnd(3, "0"));

// 20. match()
console.log("Match digits:", "Hello 123".match(/\d+/));

// 21. search()
console.log("Search for digit:", "Hello 123".search(/\d/));

// 22. toString()
let num = 123;
console.log("Number to string:", num.toString());

// 23. valueOf()
let strObj = new String("Hello");
console.log("ValueOf:", strObj.valueOf());
