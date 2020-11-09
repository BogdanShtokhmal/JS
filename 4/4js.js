//- створити функцію яка виводить масив
/*
function mas(a=[]){
    console.log(a);
    
}
mas([1,2,3,4]);
*/
//- створити функцію яка заповнює масив рандомними числами та виводить його.
//   Для виведення використати попвередню функцію.
/*
function random (a){
    let ran=[];
    for (let i=0; i<a; i++){
        ran[i]=i+1;
    }
    // console.log(ran)
    mas(ran)
}
random(4);
*/
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
/*
function min(a,b,c){
    let min=Math.min(a,b,c);
    console.log(min);
}
min(10,25,3);
*/

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
/*
function max(a,b,c){
    let max=Math.max(a,b,c);
    console.log(max);
}
max(10,25,3);
*/

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
/*
function minmax(){

    let min=Math.min(arguments);
    let max=Math.max(a,b,c);
    console.log(max);
    return min;
}
minmax(10,25,3);
*/

//- створити функцію яка виводить масив
/*
function mas(a = []) {
    console.log(a);
}
*/
//- створити функцію яка повертає найбільше число з масиву
/*
function maxmas(mas = []) {
    let max = mas[0];
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] > max) {
            max = mas[i];
        }
    }
    return max;
}

//let max = maxmas([1, 25, 10]);
console.log(maxmas([1, 25, 10]));
*/

//- створити функцію яка повертає найменьше число з масиву
/*
function minmas(mas = []) {
    let min = mas[0];
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] < min) {
            min = mas[i];
        }
    }
    return min;
}

console.log(minmas([5,15,33]));
 */

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
/*
function summas(mas=[]){
let sum=0;
    for (let i=0; i<mas.length; i++){
        sum=sum+mas[i];
    }
    return sum;
}

console.log(summas([2,5,4]))
*/

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
function arf(mas=[]){
    let sum=0;

    for (let i=0; i<mas.length; i++){
        sum=sum+mas[i];
    }
    let arfm=sum/mas.length;
    return arfm;
}

console.log(arf([2,2,2,4]));
 */

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
/*
const mas1=[
    2,
    {
        name: 'den',
        age: 8,
        dogbreed: 'poodle',
        color: 'white',
        house: true,
    },
    {
        name: 'ivan',
        surname: 'pupkin',
        age: 25,
        car: false,
        girlfrend: true,
    },
    {
        brand: 'audi',
        model: 'a6',
        color: 'red',
        maxspeed: 280,
        year: 2020,
    }
    ]

function count(arrayObj){
    let k=0;
    for (const argument of arrayObj) {
        if (typeof argument==='object'){
            k++;
        }
    }
    return k;

}

console.log(`загальн кількість полів обєктів масиву = ${count(mas1)}`);


 */

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
/*
const mas1=[
    2,
    {
        name: 'den',
        age: 8,
        dogbreed: 'poodle',
        color: 'white',
        house: true,
    },
    {
        name: 'ivan',
        surname: 'pupkin',
        age: 25,
        car: false,
        girlfrend: true,
    },
    {
        brand: 'audi',
        model: 'a6',
        color: 'red',
        maxspeed: 280,
        year: 2020,
    }
]

function count(arrayObj){
    let k=0;
    for (const argument of arrayObj) {
        if (typeof argument==='object'){
            for (const key in argument) {
                k++;

            }
        }
    }
    return k;

}

console.log(`загальн кількість полів обєктів масиву = ${count(mas1)}`);

*/

////- - створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
/*
let mas1=[1,2,3,4];
let mas2=[2,3,4,5];

function summas(array1, array2){
let sum=[];
    for (let i = 0; i < array1.length; i++) {
                sum.push(array1[i]+array2[i]);
            }
    return sum;

        }

console.log(summas(mas1,mas2));
*/

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/*
function ind(array, i){
    if (i<array.length-1){
        let mas1=array[i];
        array[i]=array[i+1];
        array[i+1]=mas1;

    }
    return array;
}

let mas=[1, 2, 10, 4, 5];
let i=2;
console.log(mas);
console.log(ind(mas, i));
 */

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
//Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
/*
function zero(mas){
    let z=[];
    let i=[];

    for (let el of mas){
        if (el===0){
            z.push(0);
        } else{
            i.push(el);
        }

    }
    return z.concat(i);

}

console.log(zero([1,0,6,0,3]));
*/

// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
/*
function addtextbody(){
    let t=document.createElement('div');
    t.innerText='Hello owu';
    document.body.appendChild(t);

}

addtextbody();
*/

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
/*
function addtextbody(typeel, text){
    let t=document.createElement(typeel);
    t.innerText=text;
    document.body.appendChild(t);

}

addtextbody('div','Hello owu');

*/

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
/*
let cars=[
    {model:'audi', year:2017, power:250, color:'red', driver:{name:'Ivan', age: 25, gender: 'man', experience:3}},
    {model:'bmv', year:2016, power:320, color:'white', driver:{name:'Nina', age: 20, gender: 'woman', experience:1}},
    {model:'vw', year:2015, power:150, color:'blue', driver:{name:'Kolya', age: 28, gender: 'man', experience:10}},
]

function add(mas, idel){
    let c=document.getElementById(idel);
    let ul= document.createElement('ul');
    for (let i = 0; i < mas.length; i++) {
        let li=document.createElement('li');
        let car=mas[i];
        li.innerText=car.model+' '+car.year;
        ul.appendChild(li);

    }
    c.appendChild(ul);

    }

add(cars, 'car');

*/


//     Для кожного автомобіля створити свій блок, та додати його в елемент,
//     індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//     Для кожної властивості створити всередені блока автомоблія свій блок
/*
let cars=[
    {model:'audi', year:2017, power:250, color:'red', driver:{name:'Ivan', age: 25, gender: 'man', experience:3}},
    {model:'bmv', year:2016, power:320, color:'white', driver:{name:'Nina', age: 20, gender: 'woman', experience:1}},
    {model:'vw', year:2015, power:150, color:'blue', driver:{name:'Kolya', age: 28, gender: 'man', experience:10}},
]

function add(mas, idel){
    let c=document.getElementById(idel);


    for (let i = 0; i < mas.length; i++) {
        let car=mas[i];
        let div=document.createElement('div');
        let model=document.createElement('h1');
        let year=document.createElement('h1');
        let power=document.createElement('h1');
        let color=document.createElement('h1');
        let driver=document.createElement('h1');

        model.innerText=car.model;
        year.innerText=car.year;
        power.innerText=car.power;
        color.innerText=car.color;
        driver.innerText=JSON.stringify(car.driver);
        div.appendChild(model);
        div.appendChild(year);
        div.appendChild(power);
        div.appendChild(color);
        div.appendChild(driver);
        c.appendChild(div);
    }

}

add(cars, 'car');

*/








