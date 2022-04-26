const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createLi = (element) => {
const itemsLi = document.createElement("li");
itemsLi.textContent = element;
return itemsLi;
};

const itemsLi = ingredients.map(createLi);

const listItem = document.querySelector("#ingredients");
listItem.append(...itemsLi);