// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let squareRectangle = (a, b) => a * b;

console.log(squareRectangle(10, 4));

// - створити функцію яка обчислює та повертає площу кола

let circleArea = (r) => Math.PI * r ** 2;

console.log(circleArea(15));

// - створити функцію яка обчислює та повертає площу циліндру

let cylinderSquare = (r, h) => 2 * Math.PI * r * h;

console.log(cylinderSquare(10,5));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr1 = ['abr', 25, false]

let arrElements = (arr) => {
    for (const arrE of arr) {
        console.log(arrE);
    }
}

arrElements(arr1);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createParagraph = (text) => {
    document.write(`<p>${text}</p>`)
}

createParagraph('someText');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList1 = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

createList1('OneMoreText');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createList2 = (text, quantity) => {
    document.write(`<ul>`)
    if (typeof quantity === 'number') {
        for (let i = 0; i < quantity; i++) {
            document.write(`<li>${text}</li>`)
        }
    }
    document.write(`</ul>`);
}

createList2('oneAnotherText', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList3 = (array) => {
    document.write(`<ul>`)
    for (const arrayE of array) {
        document.write(`<li>${arrayE}</li>`)
    }
    document.write(`</ul>`)
}

createList3(arr1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayOfObjects = [
    {
        id: 1,
        name: 'Vasya',
        age: 33
    },
    {
        id: 2,
        name: 'Bodya',
        age: 35
    },
    {
        id: 3,
        name: 'Petya',
        age: 30
    },
];

let objectList = (array) => {

    for (const user of array) {
        document.write(`
        <ul>
        <li>userId: ${user.id}</li>
        <li>name: ${user.name}</li>
        <li>age: ${user.age}</li>
        </ul>
        `)
    }

}

objectList(arrayOfObjects);