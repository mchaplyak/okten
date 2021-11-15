// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let s1 = 'hello';
let s2 = 'owu';
let s3 = 'com';
let s4 = 'ua';
let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
let b1 = true;
let b2 = false;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(b1);
console.log(b2);

// alert(s1);
// alert(s2);
// alert(s3);
// alert(s4);
// alert(n1);
// alert(n2);
// alert(n3);
// alert(n4);
// alert(n5);
// alert(n6);
// alert(n7);
// alert(b1);
// alert(b2);

document.write(s1 + '</br>');
document.write(s2 + '</br>');
document.write(s3 + '</br>');
document.write(s4 + '</br>');
document.write(n1 + '</br>');
document.write(n2 + '</br>');
document.write(n3 + '</br>');
document.write(n4 + '</br>');
document.write(n5 + '</br>');
document.write(n6 + '</br>');
document.write(n7 + '</br>');
document.write(b1 + '</br>');
document.write(b2 + '</br>');

// - Переприсвоїти кожній змінній з завдання значення на довільне.

s1 = 'hello2';
s2 = 'owu2';
s3 = 'com2';
s4 = 'ua2';
n1 = 2;
n2 = 11;
n3 = -998;
n4 = 234;
n5 = 3.1415;
n6 = 3.8;
n7 = 27;
b1 = false;
b2 = true;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(b1);
console.log(b2);

// alert(s1);
// alert(s2);
// alert(s3);
// alert(s4);
// alert(n1);
// alert(n2);
// alert(n3);
// alert(n4);
// alert(n5);
// alert(n6);
// alert(n7);
// alert(b1);
// alert(b2);

document.write('</br>' + s1 + '</br>');
document.write(s2 + '</br>');
document.write(s3 + '</br>');
document.write(s4 + '</br>');
document.write(n1 + '</br>');
document.write(n2 + '</br>');
document.write(n3 + '</br>');
document.write(n4 + '</br>');
document.write(n5 + '</br>');
document.write(n6 + '</br>');
document.write(n7 + '</br>');
document.write(b1 + '</br>');
document.write(b2 + '</br>');
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Maksym';
let lastName = 'Chapliak';
let middleName = 'Olegovych';

let preson = lastName + ' ' + firstName + ' ' + middleName
console.log(preson)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let name = prompt('enter your Name');
let patron = prompt('enter Patronymic')
let age = prompt('enter your Age')

//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
console.log(`Вітаю ${name} ${patron}. Тобі ${age} років!`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразах не використовувати однакові оператори!!!

console.log(5<6) // 5 ? 6 -> true

console.log(5<=6) // 5 ? 6 -> true

console.log(5>6) // 5 ? 6 -> false

console.log(5>=6) // 5 ? 6 -> false

console.log(5===6) // 5 ? 6 -> false

console.log(10===10) // 10 ? 10 -> true

console.log(10>=10) // 10 ? 10 -> true

console.log(10<10)// 10 ? 10 -> false

console.log(10>10)// 10 ? 10 -> false

console.log(10!=10)// 10 ? 10 -> false

console.log(123 === '123')// 123 ? '123' -> false
console.log(123 == '123')// 123 ? '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
  let str = "20";
let a = 5;
document.write(str + a + "<br/>"); // виведе 205. Тому що + сприймається як конкатинація
document.write(str - a + "<br/>"); // 15 - як і в наступних випадках JS перевіряє чи є в стрічці число, і коли знаходить його там, то виконує математичну операцію
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>");  // 10
