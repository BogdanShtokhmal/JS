//-- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
/*
let dog = {
    name: 'den';
    age: 8;
    dogbreed: 'poodle';
    color: 'white';
    house: true;
}
let men = {
    name: 'ivan';
    surname: 'pupkin';
    age: 25;
    car: false;
    girlfrend: true;
}
let car = {
    brand: 'audi';
    model: 'a6';
    color: 'red';
    maxspeed: 280;
    year: 2020;
}

let apartment ={
    room: 3;
    floor: 6;
    color: "light";
    balcon: true;
    house: 'new';
}

let book = {
    name: 'The Lord of the Rings';
    year: 1955;
    genre: "Fantasy";
    ukrainian: true;
    parts: 3;

}
 */

//-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
/*
let dogs=['dog1', 'dog2', 'dog3', 'dog4', 'dog5'];
let mens=['men1', 'men2', 'men3', 'men4', 'men5'];
let cars=['car1', 'car2', 'car3', 'car4', 'car5'];

console.log(dogs);
console.log(mens);
console.log(cars);
 */

//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
/*
let house = {
    city: 'lviv';
    rooms: {'kitchen', 'bathroom', 'bedroom', 'living room'};
    street: 'shevchenka';
    floor: 2;
    color: "light";
}

let driver = {
    name: 'vova';
    car: 'bmv';
    age: 33;
    work: {'uber', 'bolt', 'uklon'};
    city: 'lviv';
}

let toy ={
    name: 'lego';
    model: 'star vars';
    children: {'tanya', 'ivan', 'dima'};
    agemin: 10;
    country: 'china';
}

let table = {
    color: 'dark';
    view: 'round';
    room: {'living room', 'kitchen'};
    chair: 6;
    tablecloth: false;
}

let bag = {
    view: {'backpack', 'package', 'travel backpack', 'laptop bag'};
    color: 'red';
    size: 'big';
    wheels: false;
    number: 3;
}
*/
/*
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

console.log(users [7] .status);
console.log(users [4] .status); console.log(users [10] .status);
console.log(users [9] .name);
console.log(users [2] .name);
console.log(users [6] .age);
console.log(users [9] .age); console.log(users [3] .age);
console.log(users [4] .age+' '+users [4] .name);
console.log(users [5] .age+' '+users [5] .status);
*/

//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний


// - отримує текст з параграфа з id "content"
/*
let a=document.getElementById('content');
console.log(a);
 */
// - отримує текст з блоку з id "rules"
/*
let b=document.getElementById('rules');
console.log(b);
 */

// - замініть текст параграфа з id 'content' на будь-який інший
/*
let a=document.getElementById('content');

a.innerText='Вітаю';
 */

// - замініть текст параграфа з id 'rules' на будь-який інший
/*
let b=document.getElementById('rules');
b.innerText='Спроба2';
*/

// - змініть кожному елементу колір фону на червоний
/*
let a=document.getElementById('content');
a.style.backgroundColor= 'red';

let b=document.getElementById('rules');
b.style.backgroundColor= 'red';

let n=document.getElementsByTagName('li');
console.log(n);
for (const ulka of n){
    console.log(ulka);
    ulka.style.backgroundColor='red';
}
*/

// - змініть кожному елементу колір тексту на синій
/*
let a=document.getElementById('content');
a.style.color= 'blue';

let b=document.getElementById('rules');
b.style.color= 'blue';

let n=document.getElementsByTagName('li');
console.log(n);
for (const ulka of n){
    console.log(ulka);
    ulka.style.color= 'blue';
}
*/

//- отримати весь список класів елемента з id=rules і вивести їх в console.log
/*
let b=document.getElementsByClassName('fc bp');
console.log(b);
*/

//- отримати всі елементи з класом fc_rules
/*
let b=document.getElementsByClassName('fc_rules');
console.log(b);
 */

//поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let b=document.getElementsByClassName('fc_rules');
for (const e of b) {
    e.style.color = 'red';
}
*/
