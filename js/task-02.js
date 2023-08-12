const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const linkIngradients = document.querySelector('#ingredients');

const makeListElemIngradients = ingredients => {
  return ingredients.map((ingredient)=> {
    const listElemIngradients = document.createElement('li')
    listElemIngradients.classList.add('item')
    listElemIngradients.textContent = ingredient;
    return listElemIngradients;
  });
}
const elements = makeListElemIngradients(ingredients)
console.log(elements)
linkIngradients.append(...elements)
console.log(linkIngradients)

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>.

// Обов'язково використовуй метод document.createElement().

//  Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у 
// список ul#ingredients.