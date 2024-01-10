//* Looping Objects: Object Keys, Values, and Entries

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, 

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // After ES6
  },
};

//? Keys
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr); // We are open on 3 days: thu, fri, sat,


//? Values
for (const day of Object.values(openingHours)) {
  console.log(day); // {open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}
}