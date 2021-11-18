//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrOne = [2,17,13,6,22,31,45,66,100,-18]

//     1. перебрати його циклом while

let i = 0;
while (i < arrOne.length) {

    console.log(arrOne[i])
i++
};

//     2. перебрати його циклом for

for (let j = 0; j < arrOne.length; j++) {
    console.log(arrOne[j]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 1;
while (j < arrOne.length) {
    console.log(arrOne[j])
    j+=2
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 1; i < arrOne.length; i+=2) {
    console.log(arrOne[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let k = 2;
while (k < arrOne.length) {
    console.log(arrOne[k])
    k+=2
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 2; i < arrOne.length; i+=2) {
    console.log(arrOne[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i=3; i <arrOne.length; i+=3) {
    arrOne[i] = 'okten';
}
console.log(arrOne);
// 8. вивести масив в зворотньому порядку.


for (let i=arrOne.length - 1; i >= 0; i--) {
    console.log(arrOne[i]);
}

console.log(arrOne);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


//1.1
let m = arrOne.length - 1;
while (m >= 0) {

    console.log(arrOne[m])
    m--
};

//2.1

for (let j = arrOne.length - 1; j >=1; j--) {
    console.log(arrOne[j]);;

}

//3.1
let q = arrOne.length - 1;
while ( q >= 0) {
    console.log(arrOne[q])
    q-=2
}

//4.1

for (let i = arrOne.length - 1 ; i >=0; i-=2) {
    console.log(arrOne[i]);
}

//5.1

let w = arrOne.length - 2;
while ( w >= 0) {
    console.log(arrOne[w])
    w-=2
}

//6.2
for (let i = arrOne.length - 2 ; i >=0; i-=2) {
    console.log(arrOne[i]);
}

//7.2

for (let i = arrOne.length - 1 ; i >=0; i-=3) {
    arrOne[i] = 'okten';
}