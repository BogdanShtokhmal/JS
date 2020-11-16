//- создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
//let numbers=[2, 10, 15, 16, 25, 14, 7, 8, 9, 11, 33, 66, 77, 211, 555, 1236, 98, 36, 333, 660];
/*
let sort= numbers.sort((a,b)=>{
    return a-b;
});

console.log(sort);

 */
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
/*
let sort= numbers.sort((a,b)=>{
    return b-a;
});
console.log(sort);
*/
// -- при помощи filter получить числа кратные 3
/*
let n=numbers.filter((value, index, array)=>{
    return (value%3===0);
});

console.log(n);
 */
// -- при помощи filter получить числа кратные 10
/*
let n=numbers.filter((value, index, array)=>{
    return (value%10===0);
});

console.log(n);

 */

// -- перебрать (проитерировать) массив при помощи foreach()
/*
numbers.forEach(value => {
    console.log(value);
})

 */

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
/*
let c=numbers.map((value) => {
    return value*3;
})
console.log(c);
*/
//
// - создать массив со словами на 15-20 элементов.
//let names = ['Try', 'Irka', 'Karina', 'Tanka', 'Julia', 'Anna', 'Angelika', 'Bogdan', 'Ivan', 'Dimas', 'Oleg', 'Petro', 'Vasya', 'Sofia', 'Marinka'];

// -- отсортировать его по алфавиту в восходящем порядке.
/*
let sort1= names.sort((a,b)=>{
    if (a<b){return -1}
        return 1
});
console.log(sort1);
*/

// -- отсортировать его по алфавиту  в нисходящем порядке.
/*
let sort1= names.sort((a,b)=>{
    if (a>b){return -1}
    return 1
});
console.log(sort1);
*/
// -- отфильтровать слова длиной менее 4х символов
/*
names.forEach(value => {
    if (value.length>4){
        return ;}
    console.log(value);
})
*/
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
/*
let k=names.map(value => {
    return value+'!';
});
console.log(k);
*/
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
/*
let users = [ {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true} ];

 */
// - відсортувати його за  віком (зростання , а потім окремо спадання)
/*
let sort=JSON.stringify(users.sort((a, b) => a.age-b.age)) ;
console.log(JSON.parse(sort));

let sort2=users.sort((a, b) => b.age-a.age);

console.log(sort2);
*/

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
/*
let sort2=JSON.stringify(users.sort((a,b)=>{
    if(a.name<b.name){return -1}
    return 1
}));
console.log(JSON.parse(sort2));

let sort3=users.sort((a,b)=>{
    if(a.name>b.name){return -1}
    return 1
} );
console.log(sort3);
*/

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)
/*
let mas=JSON.stringify(users.map(((value, index) => {value.id=index;return value})));
console.log(JSON.parse(mas));
let mas2=JSON.parse(mas);
// - відсортувати його за індентифікатором
let sortm=mas2.sort((a, b) => b.id-a.id);
console.log(sortm);
*/
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
//