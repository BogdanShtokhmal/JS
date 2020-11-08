//1.- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
/*
let car = {
    brand: 'audi',
    model: 'a6',
    color: 'red',
}
 let dog = {
     name: 'den',
     age: 8,
     house: true,
 }
let user = {
    surname: 'pupkin',
    car: false,
    girlfrend: true,
}
let moto={
    speed: 200,
    driver: true,
    sity: 'lviv',
}
let apartment ={
    room: 3,
    floor: 6,
    balcon: true,
}
*/
//2.- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект. Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
/*
let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let cat = { id: 'nik',  frends: ['den','sara'] , girlfrend: { name: 'lii' } };
let leptop = { yer: 2019,  oc: ['windows','linux'] , memory: { hd: '25tb' } };
let house = {vilage: 'B.Kamin', chop:['chop1', 'chop2'], adres:{region:'lviv', district: 'zolochiv'}};
let bike = {color: 'red', wheel: 3, equipment['helmet', 'gloves'], owner:{name:'taras'}}
*/

//3.- При помощи for in вывести все ключи всех объектов из задания 1 и 2
/*
for (let c in car) {
    console.log(c);
}
for (let d in dog) {
    console.log(d);
}
for (let u in user) {
    console.log(u);
}
for (let m in moto) {
    console.log(m);
}
for (let a in apartment) {
    console.log(a);
}
for (let m2 in man) {
    console.log(m2);
}
for (let c2 in cat) {
    console.log(c2);
}
for (let l in leptop) {
    console.log(l);
}

for (let h in house) {
    console.log(h);
}
for (let b in bike) {
    console.log(b);
}


 */

//4.- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
/*
console.log(Object.keys(car));
console.log(Object.keys(dog));
console.log(Object.keys(user));
console.log(Object.keys(moto));
console.log(Object.keys(apartment));
console.log(Object.keys(man));
console.log(Object.keys(cat));
console.log(Object.keys(leptop));
console.log(Object.keys(house));
console.log(Object.keys(bike));

*/

//5.- Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
 //   год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
/*
let cars=[
    {model:'audi', year:2017, power:250, color:'red'},
    {model:'bmv', year:2016, power:320, color:'white'},
    {model:'vw', year:2015, power:150, color:'blue'},
    {model:'porsche', year:2020, power:350, color:'green'},
    {model:'mercedes', year:2010, power:400, color:'black'},
    {model:'opel', year:2007, power:150, color:'blue'},
    {model:'tesla', year:2020, power:450, color:'yellow'},
    {model:'mitsubishi', year:2011, power:200, color:'brown'},
    {model:'kia', year:2018, power:300, color:'orange'},
    {model:'renault', year:2009, power:150, color:'pink'},
    ]
*/
//6.- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
/*
let cities=[
    {name:'Kyiv', population: 2884000, country:'Ukraine', region:'Kyiv'},
    {name:'Lviv', population: 721301, country:'Ukraine', region:'Lviv'},
    {name:'Zolochiv', population: 24109, country:'Ukraine', region:'Lviv'},
    {name:'drogobych', population: 75396, country:'Ukraine', region:'Lviv'},
    ]
*/
//7.- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
/*
let cars2=[
    {model:'audi', year:2017, power:250, color:'red', driver:{name:'Ivan', age: 25, gender: 'man', experience:3}},
    {model:'bmv', year:2016, power:320, color:'white', driver:{name:'Nina', age: 20, gender: 'woman', experience:1}},
    {model:'vw', year:2015, power:150, color:'blue', driver:{name:'Kolya', age: 28, gender: 'man', experience:10}},
]
*/
//8.- проитерировать каждый массив из задания 5,6,7 при помощи while.
/*
let i=0;
while (i<cars.length){
    console.log(cars[i]);
    i++;
}
let k=0;
while (k<cities.length){
    console.log(cities[k]);
    k++;
}
let l=0;
while (l<cars2.length){
    console.log(cars2[l]);
    l++;
}
*/

//9.- проитерировать каждый массив из задания 5,6,7 при помощи for .
/*

for (let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

for (let k=0;k<cities.length;k++){
    console.log(cities[k]);
}

for (let l=0;l<cars2.length;l++){
    console.log(cars2[l]);
}

*/

//10.- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*
for (let i of cars) {
    console.log(i);
}

for (let k of cities) {
    console.log(k);
}
for (let l of cars2) {
    console.log(l);
}
*/

//11.- взять объекты из задания 1 и превратить каждый в json.
/*
let c=JSON.stringify(car);
console.log(c);
let d=JSON.stringify(dog);
console.log(d);
let u=JSON.stringify(user);
console.log(u);
let m=JSON.stringify(moto);
console.log(m);
let a=JSON.stringify(apartment);
console.log(a);
*/

//12.взять json из задания 11 и превратить их обратно в объекты.
/*
let c1=JSON.parse(c);
console.log(c1);
let d1=JSON.parse(d);
console.log(d1);
let u1=JSON.parse(u);
console.log(u1);
let m1=JSON.parse(m);
console.log(m1);
let a1=JSON.parse(a);
console.log(a1);
 */

//13.- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/*
for (let i=0; i<cars.length; i++){
    let obj=JSON.stringify(cars[i]);
    console.log(obj);
    }
 */

//14.- взять массив из задания 6,в цикле перебрать его объекты превратив их в json ..
/*
for (let i=0; i<cities.length; i++){
    let obj=JSON.stringify(cities[i]);
    console.log(obj);
}
 */

//15. - взять массив из задания 7,в цикле перебрать его объекты превратив их в json
// и сразу скоприовать в новый массив.
/*
let mas=[];
for (let i=0; i<cars2.length; i++){
    mas.push(JSON.stringify(cars2[i]));
}
console.log(mas);
*/

//16.- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе
// проитерировать его массив skills
/*
let users =[{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for (const user of users) {
    console.log(user);
    for (const user1 of user.skills) {
        console.log(user1);

    }

}
*/

//17. - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
// которое является массивом. Проитерировать массив пользователей и
// в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
/*
let users =[{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
let skilmas=[];
for (const user of users) {
    console.log(user);
    for (const user1 of user.skills) {
        console.log(user1);
        skilmas.push(user1);

    }

}
console.log(skilmas);
 */

//18.- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
/*
let users =[{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

for (const user of users) {
    console.log(user);
    for (const user1 of user.skills) {
        console.log(user1);

    }
*/

//19.- З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.
/*
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
/*
let adresmas=[];
for (const user of users) {
    adresmas.push(user.address);
}
console.log(adresmas)
*/

//20.- За допомоги циклу проітерувати  масив users, записати кожного юзера
// в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/*
for (const user of users) {
    let div =document.createElement('div')
    let adr=JSON.stringify(user.address);
    div.innerText=user.name+' '+ user.age+' '+user.status+' '+adr;
    document.body.appendChild(div)
}
*/
//21.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
/*
for (const user of users) {
    let div =document.createElement('div')

    let h1=document.createElement('h1');
    let h2=document.createElement('h2');
    let h3=document.createElement('h3');
    let p=document.createElement('p');

    h1.innerText=user.name;
    h2.innerText=user.age;
    h3.innerText=user.status;
    p.innerText=JSON.stringify(user.address);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);

    document.body.appendChild(div);

}
 */

//22.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*
for (const user of users) {
    let div =document.createElement('div')

    let h1=document.createElement('h1');
    let h2=document.createElement('h2');
    let h3=document.createElement('h3');
    let p=document.createElement('p');
    let li=document.createElement('li');
    let li2=document.createElement('li');
    let li3=document.createElement('li');
    let li4=document.createElement('li');

    let city=user.address.city;
    let country=user.address.country;
    let street=user.address.street;
    let houseNumber=user.address.houseNumber;


    h1.innerText=user.name;
    h2.innerText=user.age;
    h3.innerText=user.status;
    li.innerText=city;
    li2.innerText=country;
    li3.innerText=street;
    li4.innerText=houseNumber;

    p.appendChild(li);
    p.appendChild(li2);
    p.appendChild(li3);
    p.appendChild(li4);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);

    document.body.appendChild(div);

}
 */

//23.- Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
/*
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];


for (const user of usersWithId) {

    for (const citi of citiesWithId) {
        if (user.id===citi.user_id)
        user.adress=citi;
    }
    console.log(user);
}
*/

// 24.- створити розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу
/*
let id = document.getElementById('content')
let text1= id.innerText;
console.log(text1);
console.log('______________________________________________');
let clas=document.getElementsByClassName('rules');
for (const cla of clas) {
    let t=cla.innerText;
    console.log(t);
}
console.log('______________________________________________');
let teg=document.getElementsByTagName('p');
for (const teg1 of teg) {
    let te=teg1.innerText;
    console.log(te);
}
*/

//25. - змінити цей текст використовуючи селектори id, class,  tag
/*
let id = document.getElementById('content')
id.innerText='Зміна тексту в id';

let clas=document.getElementsByClassName('rules');
for (const cla of clas) {
    cla.innerText='Зміна тексту в clas';

}

let teg=document.getElementsByTagName('p');
for (const teg1 of teg) {
    teg1.innerText="Зміна тексту в teg";

}
*/

//26.- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
/*

let id = document.getElementById('content');
id.style.width='200px';
id.style.height='200px';

let clas=document.getElementsByClassName('rules');
for (const cla of clas) {
    cla.style.width='300px';
    cla.style.height='150px';
}

let teg=document.getElementsByTagName('p');
for (const teg1 of teg) {
    teg1.style.width='200px';
    teg1.style.height='100px';

}
*/

//27.- за допомоги document.createElement та appendChild створити
// таблицю на 1 рядок з трьома ячейками всередені
/*
const tabl= document.createElement('table');
const tr=document.createElement('tr');
const td1=document.createElement('td');
const td2=document.createElement('td');
const td3=document.createElement('td');

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

tabl.appendChild(tr);

document.body.appendChild(tabl);

*/
//28.- за допомоги document.createElement, appendChild
// та циклу створити таблицю на 10 рядків з трьома ячейками всередені
/*
const tabl= document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr=document.createElement('tr');

    const td=document.createElement('td');
    const td2=document.createElement('td');
    const td3=document.createElement('td');
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tabl.appendChild(tr);
}

document.body.appendChild(tabl);
*/

//29.- за допомоги document.createElement, appendChild
// та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
/*
const tabl= document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr=document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        const td=document.createElement('td');
        tr.appendChild(td);
    }
    tabl.appendChild(tr);
}

document.body.appendChild(tabl);
*/

//30.- за допомоги document.createElement, appendChild та 2х циклів
// створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
/*
let line= prompt('Введіть кількість рядків таблиці')
let column=prompt('Введіть кількість стовпців таблиці')

const tabl= document.createElement('table');

for (let i = 0; i < line; i++) {
    const tr=document.createElement('tr');
    for (let j = 0; j < column; j++) {
        const td=document.createElement('td');
        tr.appendChild(td);
    }
    tabl.appendChild(tr);
}

document.body.appendChild(tabl);
*/

//31.--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class

/*
const clas=document.getElementsByTagName('*');
// console.log(clas);
for (let tag of clas) {
    if (tag.getAttribute('class')){
        console.log(tag);
    }
}
*/
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
/*
const clas=document.getElementsByTagName('p');
for (let tag of clas) {
    tag.innerText = 'hello oktenweb';
}
*/
//  - знайти всі div та змінити ім колір на червоний
/*
const clas=document.getElementsByTagName('div');
for (let tag of clas) {
    tag.style.color='red';
}
*/
