const button = document.querySelector('form button'),
  div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', () => {
  alert('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked');
});
