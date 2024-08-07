let x;

// Array Literals
const numbers = [12, 45, 33, 29, 39];

// Array Constructors
const fruits = new Array('apple', 'grape', 'orange');
const mixed = [12, 'Hello', true, null];

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// fruits.length = 2;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';

x = fruits;

console.log(x);
