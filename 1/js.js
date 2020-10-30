// 1. присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write
/*let h='hello';
console.log(h);
alert(h);
document.write(h);
let o='owu';
console.log(o);
alert(o);
document.write(o);
let c='com';
console.log(c);
alert(c);
document.write(c);
let u='ua';
console.log(u);
alert(u);
document.write(u);
let a1=1;
console.log(a1);
alert(a1);
document.write(a1);
let a2=10;
console.log(a2);
alert(a2);
document.write(a2);
let a3=-999;
console.log(a3);
alert(a3);
document.write(a3);
let a4=123;
console.log(a4);
alert(a4);
document.write(a4);
let a5=3.14;
console.log(a5);
alert(a5);
document.write(a5);
let a6=2.7;
console.log(a6);
alert(a6);
document.write(a6);
let a7=16;
console.log(a7);
alert(a7);
document.write(a7);
let a8=true;
console.log(a8);
alert(a8);
document.write(a8);
let a9=false;
console.log(a9);
alert(a9);
document.write(a9);
*/
//2.переопределить каждую переменную из задания 1 дав им произвольные значения
// Вывести каждую при помощи console.log , alert, document.write
 /*h='Bogdan';
console.log(h);
alert(h);
document.write(h);
let o='Age';
console.log(o);
alert(o);
document.write(o);
let c='Lviv';
console.log(c);
alert(c);
document.write(c);
let u='zl';
console.log(u);
alert(u);
document.write(u);
let a1=2;
console.log(a1);
alert(a1);
document.write(a1);
let a2=20;
console.log(a2);
alert(a2);
document.write(a2);
let a3=-100;
console.log(a3);
alert(a3);
document.write(a3);
let a4=321;
console.log(a4);
alert(a4);
document.write(a4);
let a5=5.25;
console.log(a5);
alert(a5);
document.write(a5);
let a6=3.8;
console.log(a6);
alert(a6);
document.write(a6);
let a7=28;
console.log(a7);
alert(a7);
document.write(a7);
let a8=false;
console.log(a8);
alert(a8);
document.write(a8);
let a9=true;
console.log(a9);
alert(a9);
document.write(a9);
*/
//3.Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
/*
 const a1=10;
 const a2=5;
 const a3=2;
const str1='Bogdan';
const str2='okten';
const str3='web';
console.log(a1);
alert(a1);
document.write(a1);
console.log(a2);
alert(a2);
document.write(a2);
console.log(a3);
alert(a3);
document.write(a3);
console.log(str1);
alert(str1);
document.write(str1);
console.log(str2);
alert(str2);
document.write(str2);
console.log(str3);
alert(str3);
document.write(str3);
*/
//4.при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write

/*
let a= prompt("Прізвище");
let b= prompt("Ім'я");
let c= prompt("Побатькові");
console.log(a);
alert(a);
document.write(a+"<br/>");
console.log(b);
alert(b);
document.write(b+"<br/>");
console.log(c);
alert(c);
document.write(c+"<br/>");
*/
//5.Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
/*
let a= prompt("Прізвище");
let b= prompt("Ім'я");
let c= prompt("Побатькові");
let person=a+" "+b+" "+c;
console.log(person);
*/
//6.Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
/*
let a= prompt("Прізвище");
let i1= prompt("Ім'я");
let i2= prompt("Побатькові");
let b1=prompt("Ім'я брата");
let b2=i2;
let f1=prompt("Ім'я батька");
let f2=prompt("Побатькові батька");
let m1=prompt("Ім'я мами");
let m2=prompt("Побатькові маму");
let person1=a+" "+i1+" "+i2;
let person2=a+" "+b1+" "+b2;
let person3=a+" "+f1+" "+f2;
let person4=a+" "+m1+" "+m2;
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
*/
//7. при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
/*
let a1=+prompt("Число1");
let a2=+prompt("Число2");
let a3=+prompt("Число3");
console.log(a1);
console.log(a2);
console.log(a3);
*/
//8.при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
let a1=parseInt(prompt("Число1"));
let a2=parseInt(prompt("Число2"));
let a3=parseInt(prompt("Число3"));
let a4=parseInt(prompt("Число4"));
let result=a1+a2+a3+a4;
console.log(result);
*/

//9.при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему
// типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
let a1=parseFloat(prompt("Число1"));
let a2=parseFloat(prompt("Число2"));
let a3=parseFloat(prompt("Число3"));
let result=a1+a2+a3;
console.log(result);
 */

//10.при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи
// Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
/*
let a1=Math.round(prompt("Число1.5"));
let a2=Math.round(prompt("Число2.5"));
let a3=Math.round(prompt("Число3.5"));
let result=a1+a2+a3;
console.log(result);
*/

//11.при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень.
// Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.
/*
let x=parseInt(prompt("Число x"));
let y=parseInt(prompt("Число y"));
let a=Math.pow(x, y);
console.log(a);
*/

//12.При помощи оператора опредеоения типа typeof определить типы следующих переменных
// и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined
/*
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
*/

//13.Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
/*
let a1= 5<6;
let a2=5>6;
let a3=5>=6;
let a4=(5===6);
let b1=10<=10;
let b2=10>=10;
let b3=10<10;
let b4=(10!==10);
let b5=10>10;
let c1=123>'123';
let c2=(123=='123');
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(c1);
console.log(c2);
*/
