let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk;';
todo.completed = true;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3324,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id1: 1, name: 'Buy Milk' },
  { id2: 2, name: 'Learn Code' },
  { id3: 3, name: 'Clean room' },
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age');

console.log(x);
