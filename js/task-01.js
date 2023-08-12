const childElem = document.querySelector('ul')
const childElems = document.querySelectorAll('.item ')
console.log('Number of categories:',childElem.children.length)

// console.log(childElems.lastElementChild.textContent)

childElems.forEach(function (elemChild ,index ){

    console.log(`
    Category: ${elemChild.firstElementChild.textContent}
    Elements: ${elemChild.lastElementChild.childElementCount}
    `)

})



// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach()
//  і властивості навігації по DOM.

// const numbers = [5, 10, 15, 20, 25];

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });