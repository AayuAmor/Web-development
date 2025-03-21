let arrayNum = [1, 2, 3, 4, 5, 6];
let squaredArray = [];

arrayNum.forEach((num) => {
    squaredArray.push(num * num);
});

console.log(squaredArray); // Output: [1, 4, 9, 16, 25, 36]
