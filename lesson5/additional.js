// Дано натуральное число n. Выведите все числа от 1 до n.

let numbersLog = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

numbersLog(12)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let numbersLog2 = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    }
}

numbersLog2(25, 15);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arr1 = [9, 8, 0, 4];

let arrayChanger = (array, i) => {
    let changedNumber = array[i];

    array[i] = array[i + 1];
    array[i + 1] = changedNumber;
}

arrayChanger(arr1, 2);

console.log(arr1);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr2 = [0, 1, 0, 6, 0, 3];


let arrayChanger2 = (array) => {

    if (array.length >= 2 && array.length <= 100) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                array.splice(i, 1);
                array.push(0);
            }
        }
    } else {
        console.log('Введіть масив довжиною від 2 до 100 елементів!')
    }
}

arrayChanger2(arr2);

console.log(arr2);