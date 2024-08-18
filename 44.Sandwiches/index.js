function makeSandwich(...items) {
    console.log("\nMaking a Sandwich with the following items\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("Now enjoy sandwich");
}
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Cheese", "Egg");
makeSandwich("Tomato", "Mayo", "Cabbage");
export {};
