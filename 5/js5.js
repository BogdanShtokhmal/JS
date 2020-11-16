//==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

/*
    let titleOfTag_div='<div>';
    let action_div='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
    let attrs_div= [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
    ]


//__________________________________________________________________



        let titleOfTag_a='<a>';
        let action_a='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
        let attrs_a= [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
        {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
        {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
    ]




//_______________________________________________________________________

    let titleOfTag_h1='<h1>';
    let action_h1='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
    let attrs_h1= [
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
    ]


//_____________________________________________________________________


    let titleOfTag_span='<span>';
    let action_span='Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
    let attrs_span= 'Для этого тега доступны универсальные атрибуты и события.';
//_________________________________________________________________________

let titleOfTag_input='<input>';
let action_input='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
let attrs_input= [
    {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
]

//_____________________________________________________________________________

let titleOfTag_form='<form>';
let action_form='Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.';
let attrs_form= 'Нет.'

//___________________________________________________________________

let titleOfTag_option='<option>';
let action_option='Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let attrs_option= [
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
    {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
]

//__________________________________________________________________________

let titleOfTag_select='<select>';
let action_select='Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let attrs_select= [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
    {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
    {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
]
*/

/*
function Teg(titleOfTag, action, attrs ){

    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}

let a= new Teg(titleOfTag_a, action_a, attrs_a);
let div= new Teg(titleOfTag_div, action_div, attrs_div);
let h1= new Teg(titleOfTag_h1, action_h1, attrs_h1);
let span= new Teg(titleOfTag_span, action_span, attrs_span);
let input= new Teg(titleOfTag_input, action_input, attrs_input);
let form= new Teg(titleOfTag_form, action_form, attrs_form);
let option= new Teg(titleOfTag_option, action_option, attrs_option);
let select= new Teg(titleOfTag_select, action_select, attrs_select);

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);

*/

//==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
/*
class Teg2 {
constructor(titleOfTag, action, attrs) {
    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}

}

let a= new Teg2(titleOfTag_a, action_a, attrs_a);
let div= new Teg2(titleOfTag_div, action_div, attrs_div);
let h1= new Teg2(titleOfTag_h1, action_h1, attrs_h1);
let span= new Teg2(titleOfTag_span, action_span, attrs_span);
let input= new Teg2(titleOfTag_input, action_input, attrs_input);
let form= new Teg2(titleOfTag_form, action_form, attrs_form);
let option= new Teg2(titleOfTag_option, action_option, attrs_option);
let select= new Teg2(titleOfTag_select, action_select, attrs_select);

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);
*/

//==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний
// об'єкт car
// ==============================================
/*
let car={
    model: 'A6',
    brand: 'Audi',
    year: 2018,
    maxspeeed: 280,
    engine: 3.0,
    driver: {name:'petro', age:30},
    drive: function (){
        console.log(`їдемо зі швидкістю ${this.maxspeeed} на годину`);
    },
    info: function (){
        console.log(`${this.model} ${this.brand} ${this.year} ${this.maxspeeed} ${this.engine} ${this.driver.name}`)
    },
    increaseMaxSpeed: function (newSpeed){
        this.maxspeeed=this.maxspeeed+newSpeed;
    },
    changeYear: function (newValue){
        this.year=newValue;
    },
    addDriver: function (driver){
        this.driver=driver;
    }
}

let driver={name:'Bogdan', age:28};

console.log(car);

car.info();
car.drive();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver(driver);
car.info();
*/

//==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його
// в поточний об'єкт car
// ==============================================
/*
function Car(model, brand, year, maxspeeed, engine){
this.model=model;
    this.brand=brand;
    this.year=year;
    this.maxspeeed=maxspeeed;
    this.engine=engine;

    this.drive= function (){
    console.log(`їдемо зі швидкістю ${this.maxspeeed} на годину`);
};
    this.info= function (){
        if (this.driver){
            console.log(`${this.model} ${this.brand} ${this.year} ${this.maxspeeed} ${this.engine} ${this.driver.name}`)
        }else{console.log(`${this.model} ${this.brand} ${this.year} ${this.maxspeeed} ${this.engine} `)

        }

};
    this.increaseMaxSpeed= function (newSpeed){
    this.maxspeeed=this.maxspeeed+newSpeed;
};
    this.changeYear= function (newValue){
    this.year=newValue;
};
    this.addDriver= function (driver){
    this.driver=driver;
}
}

let driver={name:'Bogdan', age:28};

let car= new Car('A6', 'Audi', 2018, 280,  3.0 );
console.log(car);

car.info();
car.drive();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver(driver);
car.info();

*/

//==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його
// в поточний об'єкт car
// ==============================================
/*
class Car2{
    constructor(model, brand, year, maxspeeed, engine){
        this.model=model;
        this.brand=brand;
        this.year=year;
        this.maxspeeed=maxspeeed;
        this.engine=engine;

        this.drive= function (){
            console.log(`їдемо зі швидкістю ${this.maxspeeed} на годину`);
        };
        this.info= function (){
            if (this.driver){
                console.log(`${this.model} ${this.brand} ${this.year} ${this.maxspeeed} ${this.engine} ${this.driver.name}`)
            }else{console.log(`${this.model} ${this.brand} ${this.year} ${this.maxspeeed} ${this.engine} `)

            }

        };
        this.increaseMaxSpeed= function (newSpeed){
            this.maxspeeed=this.maxspeeed+newSpeed;
        };
        this.changeYear= function (newValue){
            this.year=newValue;
        };
        this.addDriver= function (driver){
            this.driver=driver;
        }
    }


}

let driver={name:'Bogdan', age:28};

let car= new Car2('A4', 'Audi', 2015, 250,  2.4 );
console.log(car);

car.info();
car.drive();
car.increaseMaxSpeed(120);
car.changeYear(2020);
car.addDriver(driver);
car.info();
*/

//==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
/*
class Popel{
    constructor(name, age, size){
        this.name=name;
        this.age=age;
        this.size=size;
    }
}

let p1=new Popel('Irina', 20,38);
let p2=new Popel('Olena', 21,39);
let p3=new Popel('Lida', 18,37);
let p4=new Popel('Ylya', 25,40);
let p5=new Popel('Katya', 17,36);
let p6=new Popel('Valya', 22,35);
let p7=new Popel('Tanya', 24,41);
let p8=new Popel('Nina', 23,34);
let p9=new Popel('Sofia', 19,42);
let p10=new Popel('Lilya', 26,38.5);

let masp=[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
console.log(masp);

class Prints{
    constructor(name, age, tyfl){
        this.name=name;
        this.age=age;
        this.tyfl=tyfl;
    }
}

let pr1=new Prints('Bogdan', 28,37);



console.log(pr1);


    for (const popel of masp) {
        if(pr1.tyfl===popel.size){
            pr1.love=popel.name;
        }

    }
    console.log(pr1);
*/


//==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
/*
class Popel{
    constructor(name, age, size){
        this.name=name;
        this.age=age;
        this.size=size;
    }
}

let p1=new Popel('Irina', 20,38);
let p2=new Popel('Olena', 21,39);
let p3=new Popel('Lida', 18,37);
let p4=new Popel('Ylya', 25,40);
let p5=new Popel('Katya', 17,36);
let p6=new Popel('Valya', 22,35);
let p7=new Popel('Tanya', 24,41);
let p8=new Popel('Nina', 23,34);
let p9=new Popel('Sofia', 19,42);
let p10=new Popel('Lilya', 26,38.5);

let masp=[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
console.log(masp);

class Prints{
    constructor(name, age, tyfl){
        this.name=name;
        this.age=age;
        this.tyfl=tyfl;
    }
}

let pr1=new Prints('Bogdan', 28,38);

//let maspr=[pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10];
console.log(pr1);

function search(pr, masp){

    for (const i of masp) {
        if(i.size===pr.tyfl){
           pr.love=i.name;
        }
    }
    console.log(pr);

};

search(pr1, masp);

 */