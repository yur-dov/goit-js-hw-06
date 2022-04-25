const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


for (const item of ingredients) {
  console.log(item);
}
const createLi = document.createElement('li');
createLi.textContent = item;
console.log(createLi);

