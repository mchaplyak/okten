// --створити масив з:
//     - з 5 числових значень

let arrN = [23, 45, 67, 111, 876];

// - з 5 стічкових значень

let arrS = ['hello', 'my', 'name', 'is', 'Max'];

// - з 5 значень стрічкового, числового та булевого типу

let arrM = ['lesson3', 25, 'task1', 66, true];

// - та вивести його в консоль

console.log(arrM);
console.log(arrS);
console.log(arrN);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrE = [];

arrE.splice(0, 0, 'IndexOne', 'IndexTwo', 'IndexThree');

console.log(arrE);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Довільний текст</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello number ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>Довільний текст2</h1>`)
    i++

};
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let it = 0;
while (it < 20) {
    document.write(`<h1>Number ${it}</h1>`)
    it++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for (const n of arr1) {
    console.log(n);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = ['stringOne', 'stringTwo', 'stringThree', 'stringFour', 'stringFive', 'stringSix', 'stringSeven',
    'stringEight', 'stringNine', 'stringTen'];

for (const s of arr2) {
    console.log(s);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrMx = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (const m of arrMx) {
    console.log(m);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrMx2 = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (const m of arrMx2) {
    if (typeof m === 'boolean') {
        console.log(m);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrMx3 = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (const m of arrMx3) {
    if (typeof m === 'number') {
        console.log(m);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrMx4 = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (const m of arrMx4) {
    if (typeof m === 'string') {
        console.log(m);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrEm = [];

arrEm.splice(0, 0, 'firstIndex', 23, false, 'Hello');


for (const m of arrEm) {
    console.log(m);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j+=2) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let j = 2; j < 200; j+=2) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let j = 1; j < 200; j+=2) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}
