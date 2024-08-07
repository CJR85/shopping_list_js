// Loop through arrays
const items = ['book', 'table', 'chairs', 'kitet'];
const users = [{ name: 'John' }, { name: 'Sian' }, { name: 'Rob' }];

// for (let item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello, World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'Sian');
map.set('age', '31');

for (const [key, value] of map) {
  console.log(key, value);
}
