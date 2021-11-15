// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [];
let result = 0;

for (let i = 0; i < 10; i++) {
  arr.push(Math.round(Math.random() * 10))
  result = result + arr[i]
}

console.log(arr);
console.log(result);
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
  title: 'ReadyPlayerOne',
  pages: 465,
  ganre: 'litRPG'
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
  title: 'ReadyPlayerTwo',
  pages: 360,
  ganre: 'litRPG',
  autor: 'Ernest Cline'
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
  {
  title: 'ReadyPlayerTwo',
  pages: 360,
  ganre: 'litRPG',
  autor: 'Ernest Cline'
  },
  {
    title: 'ReadyPlayerOne',
    pages: 465,
    ganre: 'litRPG',
    autor: 'Ernest Cline'
  }
]
console.log(books[0]);
console.log(books[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let widght = 10;
let s = 23*10;
console.log(s + 'см.');

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = 3.14 * (4**2) *heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;

let k = Math.sqrt((n**2 + m**2));
console.log(k);
