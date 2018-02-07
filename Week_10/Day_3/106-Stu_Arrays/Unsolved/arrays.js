// convert the code below to use the array methods instead of for loops
// you'll need to use the filter, reduce, map, and forEach methods

const princesses = [{name: 'Rapunzel', age: 18}, {name: 'Mulan', age: 16},
  {name: 'Anna', age: 18}, {name: 'Moana', age: 16}];

// log the name of each princess, follow by a colon, followed by their age
// can be replaced with forEach
//for (let i = 0; i < princesses.length; i++) {
 // console.log(`${princesses[i].name}: ${princesses[i].age}`);
//}

princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});


// create an array of princess names from the existing array
// can be replaced with map
/*let names = [];
for (let i = 0; i < princesses.length; i++) {
  names.push(princesses[i].name);
}*/

const names = princesses.map(function(princess) {
  return princess.name;
});

console.log("names: ", names);


// using the `names` array, get only those names that start with an 'M'
// can be replaced with filter
/*let mNames = [];
for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith('M')) {
    mNames.push(names[i]);
  }
}
console.log("m-names: ", mNames);*/

const mNames = princesses.filter(function(princess){
  return princess.name.startsWith("M");
});
console.log(`m-names: ${mNames}`);


// get a single value from the data: the average age of all of the princesses
// Can be replaced with reduce
/*let sum = 0;
for (let i = 0; i < princesses.length; i++) {
  sum += princesses[i].age;
}
const average = sum / princesses.length;
console.log("average age: ", average);*/

let sum = princesses.reduce(function(sum, princess) {
  return sum += princess.age;
}, 0)

const average = sum / princesses.length;
console.log("average age: ", average);


// BONUS: get the average age of all princesses whose name includes an 'l'
let lNames = [];
for (let i = 0; i < princesses.length; i++) {
  if (princesses[i].name.includes('l')) {
    lNames.push(princesses[i].name);
  }
}
console.log("l-names: ", lNames);
