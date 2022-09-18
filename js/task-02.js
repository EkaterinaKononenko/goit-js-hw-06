/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Создание 'li' с классом 'item' и текстом из массива ingredients:

let parent = document.querySelector("#ingredients");

/*const newIngredients = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.className = "item";
  newElement.textContent = ingredient;
  return newElement;
});
parent.append(...newIngredients);*/
const newIngredients = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.className = "item";
  newElement.textContent = ingredient;
  return newElement;
});
parent.append(...newIngredients);
