// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 23;

if (time <= 15) {
    console.log('Перша частина')
} else if (time > 15 && time <=30) {
    console.log('Друга частина')
} else if (time > 30 && time <=45) {
    console.log('Третя частина')
} else if (time > 45 && time <=59) {
    console.log('Четверта частина')
} else {
    console.log('Помилкове введення!')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;

if (day > 0 && day <=10) {
    console.log('Перша декада')
} else if (day > 10 && day <=20) {
    console.log('Друга декада')
} else if (day > 20 && day <=31) {
    console.log('Третя декада')
} else {
    console.log('Помилкове введення!')
};


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = 'fsfsj';

if (test != true) {
    console.log('Вірно')
} else {
        console.log('Неправильно')
    };


console.log(test != true ? 'Вірно' : 'Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;
console.log(a != 0 ? 'Вірно' : 'Неправильно');

a = 0;
console.log(a != 0 ? 'Вірно' : 'Неправильно');

a = -3;
console.log(a != 0 ? 'Вірно' : 'Неправильно');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let nDay = prompt('Введіть номер дня')
switch (nDay) {
    case '1':
        console.log('Робота, заннятя, спортзал');
        break;
    case '2':
        console.log('Робота, книжка, вечеря');
        break;
    case '3':
        console.log('Робота, обід, театр');
        break;
    case '4':
        console.log('Робота, рибалка, пиво');
        break;
    case '5':
        console.log('Робота, тренування, вечірка');
        break;
    case '6':
        console.log('Вихідні, прибирання');
        break;
    case '7':
        console.log('Відпочинок');
        break;

    default:
        console.log('Введіть вірний день!')
}


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let days = +prompt('Введіть кількість днів у році');

if (days % 2 === 0) {
    console.log('Високосний рік')
} else {
    console.log('Звичайний рік')
}

//або
console.log(days % 2 === 0 ? 'Високосний рік' : 'Звичайний рік')

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let q = prompt('Яка «офіційна» назва JavaScript?')

if (q === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}

// або
console.log(q === 'ECMAScript' ? 'Правильно!' : 'Не знаєте? ECMAScript!')