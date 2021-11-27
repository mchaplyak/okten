// - Знайти та вивести довижину настипних стрінгових значень

let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';

console.log(helloWorld.length);
console.log(loremIpsum.length);
console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hwUC = helloWorld.toUpperCase();
let liUC = loremIpsum.toUpperCase();
let jsUC = javascriptIsCool.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let hwLC = hwUC.toLowerCase();
let liLC = liUC.toLowerCase();
let jsLC = jsUC.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDr = ' dirty string   '

let strTtimed = strDr.trim();

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let stringToArray = (string) => string.split(' ');

let str = 'Каждый охотник желает знать';
let arr = stringToArray(str);

console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (string, length) => string.substr(0, length);

document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

let insert_dash = (string) => string.replaceAll(' ', '-').toUpperCase();

document.writeln(insert_dash(str2)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upperCaseFirstChar = (string) => string[0].toUpperCase().concat(string.slice(1));

console.log(upperCaseFirstChar('hello'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let upperCaseFun = (string) => {
    let splitedString = string.split(' ');
    newStr = '';
    for (const splitedEl of splitedString) {
       newStr +=`${splitedEl[0].toUpperCase().concat(splitedEl.slice(1))} `;
    }
    return newStr;
}

console.log(upperCaseFun('hello how are you'));