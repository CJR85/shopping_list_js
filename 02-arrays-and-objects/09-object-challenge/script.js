// Step 1
const library = [
  {
    title: 'The Rational Male - Volume 4: Religion',
    author: 'Rollo Tomassi',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Rational Male - Volume 3: Positive Masculinity',
    author: 'Rollo Tomassi',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: 'The Rational Male - Volume 2: Preventive Medicine',
    author: 'Rollo Tomassi',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
