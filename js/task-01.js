//1. Подсчет колличества категорий в ul#categories

const quantity = document.querySelector("#categories").children.length;
console.log("Number of categories:", quantity);

//2.Найти категории h2 и колличество элементов в каждой категории
const elements = document.querySelectorAll(".item");
elements.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  const lengthOfCategory = element.lastElementChild.children.length;
  console.log("Elements:", lengthOfCategory);
});
// 3. Вывод в консоль
/*Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/
