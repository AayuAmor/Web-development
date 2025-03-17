let arr = [1, 2, 3, 4, 5, 2, 3];
//toString : converts an array into a comma-separated string.
console.log(arr.toString()); // "1,2,3,4,5"

// 1. length
console.log("Length:", arr.length);

// 2. push() - Adds element(s) to the end
arr.push(6);
console.log("Push 6:", arr);

// 3. pop() - Removes last element
console.log("Pop:", arr.pop(), arr);

// 4. shift() - Removes first element
console.log("Shift:", arr.shift(), arr);

// 5. unshift() - Adds element(s) to the beginning
arr.unshift(0);
console.log("Unshift 0:", arr);

// 6. indexOf()
console.log("Index of 3:", arr.indexOf(3));

// 7. lastIndexOf()
console.log("Last index of 3:", arr.lastIndexOf(3));

// 8. includes()
console.log("Includes 4?", arr.includes(4));

// 9. slice() - Returns a part of an array
console.log("Slice (1,4):", arr.slice(1, 4));

// 10. splice() - Modifies an array
arr.splice(2, 1, 10); // Replaces index 2 with 10
console.log("Splice (replace index 2 with 10):", arr);

// 11. concat() - Merges arrays
let newArr = arr.concat([7, 8, 9]);
console.log("Concat:", newArr);

// 12. join() - Converts array to string
console.log("Join with '-':", arr.join("-"));

// 13. reverse() - Reverses array
console.log("Reverse:", arr.reverse());

// 14. sort() - Sorts array
console.log("Sort:", arr.sort());

// 15. filter() - Filters elements based on condition
console.log("Filter (elements > 2):", arr.filter(num => num > 2));

// 16. map() - Transforms each element
console.log("Map (multiply by 2):", arr.map(num => num * 2));

// 17. reduce() - Reduces array to a single value
console.log("Reduce (sum):", arr.reduce((sum, num) => sum + num, 0));

// 18. every() - Checks if all elements meet a condition
console.log("Every element > 0?", arr.every(num => num > 0));

// 19. some() - Checks if any element meets a condition
console.log("Some element > 10?", arr.some(num => num > 10));

// 20. find() - Returns first matching element
console.log("Find first element > 2:", arr.find(num => num > 2));

// 21. findIndex() - Returns index of first matching element
console.log("Find index of first element > 2:", arr.findIndex(num => num > 2));

// 22. fill() - Fills array with a value
console.log("Fill with 7:", arr.fill(7, 1, 4));

// 23. flat() - Flattens nested arrays
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("Flat (1 level):", nestedArr.flat());

// 24. flatMap() - Maps and flattens
console.log("FlatMap (double and flatten):", nestedArr.flatMap(num => num));

// 25. forEach() - Iterates over array
console.log("ForEach (Print each element):");
arr.forEach(num => console.log(num));
