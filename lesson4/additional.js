// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function mixArg() {
    console.log(arguments);
    if (arguments.length === 1) {
        console.log(arguments[0])
    } else if (arguments.length > 1 && arguments.length <= 2) {
        return arguments[0] + arguments[1]
    } else {
        console.log('Введіть не більше 2 аргументів')
    }
}

console.log(mixArg(5, 7));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];

function mergeArr(arrayOne, arrayTwo) {

    mergedArray = [];

    for (const a1 of arrayOne) {
        for (const a2 of arrayTwo) {
            if (arrayOne.indexOf(a1) === arrayTwo.indexOf(a2)) {
                mergedArray.push(a1 + a2)
            }
        }
    }

    return mergedArray;
}

console.log(mergeArr(arr1, arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arr3 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function objectKeys(arr) {

    let keysArray = [];

    for (const e of arr) {
        for (const k in e) {
            keysArray.push(k);
        }
    }
    return keysArray;
}

console.log(objectKeys(arr3));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


