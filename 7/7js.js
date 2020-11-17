//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике
// на кнопку исчезал элемент с id="text".
/*
let t=document.getElementById('text')
let btn=document.getElementById('btn');
btn.style.height='20px';
btn.style.width='90px';
btn.innerText='сховати text';

btn.onclick=()=> t.style.display='none';
*/

//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
/*
let btn2=document.createElement('button');
btn2.innerText='сховати';
btn2.style.backgroundColor='red';
btn2.onclick=()=> btn2.style.display='none';
document.body.appendChild(btn2);
*/
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


/*

let t=document.createElement('div');
let vik= document.createElement('input');
let btn2=document.createElement('button');
btn2.style.margin='30px';
btn2.innerText='прийняти';
let p='';
btn2.onclick=()=> {if(vik.value<18){p=alert('Вам нема 18')}else{p=alert('вітаємо!')}};
t.appendChild(vik);
t.appendChild(btn2);
document.body.appendChild(t);
*/
//
// - Создайте меню, которое раскрывается/сворачивается при клике
/*
let div=document.createElement('div');
let menu=document.createElement('ul');
let menu1=document.createElement('ul');
let menu2=document.createElement('ul');
let menu3=document.createElement('ul');
let menu4=document.createElement('ul');
menu.style.border='2px solid red';
menu.style.width='50px';
menu.style.paddingLeft='0px';
menu.innerText='Меню';
menu1.innerText='Меню1.1';
menu2.innerText='Меню1.2';
menu3.innerText='Меню1.3';
menu4.innerText='Меню1.4';
let m=true;
menu.onclick=()=>{
    if(m){
        menu1.style.display='none';
        menu2.style.display='none';
        menu3.style.display='none';
        menu4.style.display='none';
        m=false;
    } else {
        menu1.style.display = 'block';
        menu2.style.display = 'block';
        menu3.style.display = 'block';
        menu4.style.display = 'block';
        m=true;
    }

} ;
div.appendChild(menu);
div.appendChild(menu1);
div.appendChild(menu2);
div.appendChild(menu3);
div.appendChild(menu4);
document.body.appendChild(div);

 */
//
// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
/*
let coment=[
{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
{title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]

const com=document.getElementById('text');

coment.forEach(value => {
    const div=document.createElement('div');
    const h3=document.createElement('h3');
    const p=document.createElement('p');
    h3.innerText=value.title;
    p.innerText=value.body;

    const btn=document.createElement('button');
    let flag=true;
    btn.onclick=()=>{
        if(flag){
            p.style.display='none';
            flag=false;
        }else {
            p.style.display='block';
            flag=true;

    }
    }
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    com.appendChild(div)
})
*/

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ