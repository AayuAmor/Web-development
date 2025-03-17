let companies=["Bloomberg", "Microsoft", "Uber","Google","IBM", "Netflix"];
console.log(`Companies are : ${companies}`);
//removing the first company from the array
companies.shift();
console.log(`Removing Bloomberg:\n${companies}`);
//removing Uber & Add Ola in its Place
companies.splice(1, 1, "Ola");
console.log(`Replacing Uber with Ola :\n${companies}`);
//Adding Amazon at the End
companies.push("Amazon");
console.log(`Adding Amazon:\n${companies}`);
