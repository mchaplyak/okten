// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

console.log(friends.length >=3 ? 'Це великий масив в якому 3 або більше елементів' : 'Це маленький масив в якому менше 3 елементів')

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

a1 = 43;
a2 = 56;
a3 = 98;

console.log(
        (a1 < a2 && a1 > a3 || a1 < a3 && a1 > a2) ? a1 :
        (a2 < a3 && a2 > a1 || a2 < a1 && a2 > a3) ? a2 :
        (a3 < a1 && a3 > a2 || a3 < a2 && a1 > a2) ? a3 :
        'error'
);

// - Перепишіть конструкцію if з використанням умовного оператора '?':
let a = 2;
let b = 1;
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}

console.log(a+b<4 ? result = 'Мало' : result = 'Багато')

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let number = -23;

console.log((number < 0 && number >= -100) ? 'відємне число' :
    (number === 0) ? 'Це нуль' :
    (number > 0 && number <= 100) ? 'Плюсове число' : 'Ви вийшли за межі')