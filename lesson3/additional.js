// 1. Створити пустий масив та :

let arrOne = [];

//     a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 2; i <= 100; i+=2) {
    arrOne.push(i)
}

console.log(arrOne);

//     b. заповнити його 50 непарними числами за допомоги циклу.

let arrTwo = [];

for (let i = 1; i <= 99; i+=2) {
    arrTwo.push(i)
}

console.log(arrTwo);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

arrThree = [];

for (let i = 0; i < 20; i++) {
    arrThree.push(
        Math.round(Math.random() * 1000)
    )
}
console.log(arrThree);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

arrFour = [];

for (let i = 0; i < 20; i++) {
    arrFour.push(
        Math.round(Math.random() * 732) + 8
    )
}
console.log(arrFour);

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2; i < arrTwo.length; i+=3) {
    console.log(arrOne[i]);

}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < arrFour.length; i+=3) {
    if (!(arrFour[i] % 2)) {
        console.log(arrFour[i]);
    }

}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arrFive = [];

for (let i = 2; i < arrFour.length; i+=3) {
    if (!(arrFour[i] % 2)) {
        console.log(arrFour[i]);
        arrFive.push(arrFour[i])
    }
};

console.log(arrFive);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arrFour.length - 1; i++) {
   if (!(arrFour[i+1] % 2)) {
       console.log(arrFour[i]);
   }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrSix = [100,250,50,168,120,345,188];
let sum = 0;


for (const number of arrSix) {
    sum += number;
}

console.log(`Середній чек = ${sum / arrSix.length}`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrSeven = [3, 8, 10, 23, 27, 29, 31, 33, 40, 45]

let arrEight = [];

for (const el of arrSeven) {
    let newNum = el * 5;
    arrEight.push(newNum)
};

console.log(arrEight);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arrNine = ['String', 433, true, 'string2', 'anotherString', 32, false, true, 56];
let arrTen = [];

for (const el of arrNine) {


if (typeof el === 'number') {
    arrTen.push(el)
}
};

console.log(arrTen);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];



// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// let usersWithCities = [];
//
// for (const userEl of usersWithId) {
//     for (const cityEl of citiesWithId) {
//         if (userEl.id === cityEl.user_id) {
//             usersWithCities.push(userEl);
//             usersWithCities.push(cityEl);
//         }
//     }
// }
// console.log(usersWithCities);

let usersWithCities = [];

for (const userEl of usersWithId) {
    for (const address of citiesWithId) {
        if (userEl.id === address.user_id) {
            usersWithCities.push({...userEl, address})
        }
    }
}
console.log(usersWithCities);


// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//




// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrEleven = [3, 8, 10, 23, 27, 29, 31, 33, 40, 45]

for (const n of arrEleven) {
    if (!(n % 2)) {
        console.log(n);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

arrTwelve = [];

for (const n of arrEleven) {
    arrTwelve.push(n)
}

console.log(arrTwelve);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let stringArray = [ 'a', 'b', 'c'];
let s1 = '';

for (const s of stringArray) {
    s1+=s;
}
console.log(s1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let s2 = '';
let si = 0;

while (si < stringArray.length) {

    s2+=stringArray[si]
    si++
}

console.log(s2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


s3 = '';

for (let i = 0; i < stringArray.length; i++) {
    const stringArrayElement = stringArray[i];
    s3+=stringArrayElement;
}

console.log(s3);