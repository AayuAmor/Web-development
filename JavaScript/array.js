let price = [250, 645, 300, 900, 50];
console.log(`The Prices are : ${price}`);
console.log("Here The Offer And Final Price is:")
for (i=0; i<price.length;i++ ){
    offer=price[i]/10;
    finalPrice= price[i]-offer;
    console.log(`The Offer for the Price ${price[i]} is ${offer} and The Final-Price is ${finalPrice}`);
    
}
