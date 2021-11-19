// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numberChecker(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return true
    } else {

        console.log('EnterNumber!')
    }
}

function minNumber(a, b, c) {
    if (a < b && a < c && numberChecker(a, b, c)) {
        console.log(a);
    } else if (b < a && b < c && numberChecker(a, b, c)) {
        console.log(b);
    } else if (c < a && c < b && numberChecker(a, b, c)) {
        console.log(c);
    }
}

minNumber(35, 12, 56);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(a, b, c) {
    if (a > b && a > c && numberChecker(a, b, c)) {
        console.log(a);
    } else if (b > a && b > c && numberChecker(a, b, c)) {
        console.log(b);
    } else if (c > a && c > b && numberChecker(a, b, c)) {
        console.log(c);
    }
}

maxNumber(35, 12, 56);

// - створити функцію яка повертає найбільше число з масиву

let arr1 = [35, 12, 56, 67, 876];

function arrMaxNumber(array) {
    let max = Math.max.apply(null, array)
    return max;
}

console.log(arrMaxNumber(arr1));

// - створити функцію яка повертає найменьше число з масиву

function arrMinNumber(array) {
    let min = Math.min.apply(null, array)
    return min;
}

console.log(arrMinNumber(arr1));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arrSum(array) {
    summ = 0;
    for (const arrayElement of array) {
        summ += arrayElement;
    }
    return summ;
}

console.log(arrSum(arr1));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrArithneticMean(array) {
    summ = 0;
    for (const arrayElement of array) {
        summ += arrayElement;
    }
    return summ / array.length;
}

console.log(arrArithneticMean(arr1));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMaxNumber() {
    let min = arguments[0];
    let max = arguments[0];

    for (const argument of arguments) {
        if (argument < min) min = argument;
        if (argument > max) max = argument;
    }
    console.log('maximum element: ' + max);
    return min;
}

console.log(`minimum element: ${minMaxNumber(25, 36, 245, -11, 333)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrRandomNumbers = [];

function randomNumbers(array, quantity) {
    for (let i = 0; i < quantity; i++) {
        array.push(Math.round(Math.random() * 100))
    }
}

randomNumbers(arrRandomNumbers, 10);

console.log(arrRandomNumbers);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrRandomNumbers2 = [];

function randomNumbers2(array, quantity, limit) {
    for (let i = 0; i < quantity; i++) {
        array.push(Math.round(Math.random() * limit))
    }
}

randomNumbers2(arrRandomNumbers2, 10, 10);

console.log(arrRandomNumbers2);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr2 = [1, 2, 3]


function reverseArray(array) {
    let reverseArr = [];

    for (let i = array.length - 1; i >= 0; i--) {
        const arrayElement = array[i];
        reverseArr.push(arrayElement);
    }

    return reverseArr
}

console.log(reverseArray(arr2));


