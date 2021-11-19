// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    let result = a * b;

    return result;
}


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    let result = Math.PI * r ** 2;

    return result;
}


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare(r, h) {
    let result = 2 * Math.PI * r * h;

    return result;
}

console.log(cylinderSquare(3, 12));

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayL(a) {
    for (const aElement of a) {
        console.log(aElement);
    }
}

let array1 = [25, 'okten', true, 256];

arrayL(array1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function makePar(text) {
    document.write(`<div>${text}</div>`)
}

makePar('some text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList1(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

createList1('some another text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList2(text, quantity) {

    document.write(`<ul>`)
    if (typeof quantity === 'number') {
        for (let i = 0; i < quantity; i++) {
            document.write(`<li>${text}</li>`)
        }
    }
    document.write(`</ul>`);
}

createList2('one more text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList3(array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}

createList3(array1);

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

function objectList(array) {
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

objectList(arrayOfObjects)