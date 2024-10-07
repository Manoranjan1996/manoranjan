// console.log("hello World");
// var fastName = "Manoj";
// console.log(fastName);

// const pi = 3.141;
// console.log(pi);
// let fastName = "manoranjan";
// console.log(fastName.length);
// console.log(fastName[fastName.length - 1]);
// console.log(fastName.toUpperCase());

// let string1 = "manoj";
// let string2 = 18;
// let fullName = string1 + string2;
// console.log(fullName);
// let firstNname = `my name is ${string1} and my age is ${string2}`;
// console.log(firstNname);
// console.log(string2.MAX_SAFE_INTEGER);

// let num1 = 3;
// let num2 = 8;
// console.log(num1 < num2);
// console.log(num1 != num2);

// let age = 35;
// if (age > 18) {
//   console.log("user can play game");
// } else {
//   console.log("not play game");
// }

// let num = 13;
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let age = 9;
// let drink = age >= 5 ? "coffe" : "milk";
// console.log(drink);

// let firstName = "Manoj";
// let age = 8;

// if (firstName[0] === "M" && a19ge > 18) {
//   console.log("inside if");
// } else {
//   console.log("inside else");19
// }

// let winnigNumber = 19;
// let userGuss = prompt("Guess a number");
// if (userGuss === winnigNumber) {
//   console.log("Your guess is right");
// } else {
//   if (userGuss < winnigNumber) {
//     console.log("too low");
//   } else {
//     console.log("too heigh");
//   }
// }

// let tempDegree = 49;

// if (tempDegree < 0) {
//   console.log("Temperature cold outside");
// } else if (tempDegree < 15) {
//   console.log("it is out side");
// } else if (tempDegree < 25) {
//   console.log("same");
// } else if (tempDegree < 40) {
//   console.log("lets goo");
// } else if (tempDegree < 45) {
//   console.log("AC on kar");
// } else {
//   console.log("hoegola");
// }

// let day=2
// switch (day) {
//     case value:

//         break;

//     default:
//         break;
// }

// let i = 0;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// let num = 100;
// let total = (num * (num + 1)) / 2;
// console.log(total);

// for (let i = 0; i < i <= 9; i++) {
//   console.log(i);
// }

// const object = ["go", "went", "gone"];
// const object2 = [];
// for (const element of object) {
//   console.log(element.toUpperCase());
// }

// const band = {
//   bandname: "Chamak Cholo",
//   fomous: "Radhy Radhy",
//   since: 1998,
//   end: 2024,
// };

// const { bandname, fomous, since, ...restProps } = band;
// console.log(restProps);

// const users = [
//   { userId: 1, firstName: "manoj", gender: "male" },
//   { userId: 2, firstName: "tapan", gender: "femal" },
//   { userId: 3, firstName: "radhy", gender: "male" },
// ];
// for (const user of users) {
//   console.log(user.gender);
// }

// const users = [
//   { userId: 1, firstName: "manoj", gender: "male" },
//   { userId: 2, firstName: "tapan", gender: "femal" },
//   { userId: 3, firstName: "radhy", gender: "male" },
// ];

// const [{ firstName: user1firstName, userId }, , { gender: user3firstName }] =
//   users;

// console.log(user1firstName);

// console.log(userId);
// console.log(user3firstName);

// console.log("happy birthday");

// function sing() {
//   console.log("happy birthday");
// }
// sing();

// function two(num1, num2) {
//   return num1 + num2;
// }
// const returnV = two(2, 6);
// console.log(returnV);

// const sing = () => {
//   console.log("hppy");
// };
// sing();

// const firstName = "manoj";
// console.log(firstName);

// if (true) {
//   console.log("hello");
// }

// function myApp() {
//   if (true) {
//     var firstName = "manoj";
//     console.log(firstName);
//   }
//   console.log(firstName);
// }
// myApp();

// function addTwo(a, b) {
//   return a + b;
// }
// const ans = addTwo(4, 3);
// console.log(ans);

// function addTwo(a, b = 0) {
//   return a + b;
// }
// const ans = addTwo(4);
// console.log(ans);

//rest parameter

// function myFun(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is `, c);
// }

// myFun(2, 5, 8, 3, 7, 9);

// function addNum(...numbers) {
//   total = 0;
//   for (number of numbers) {
//     total = total + number;
//   }
//   return total;
// }
// const ans = addNum(5, 7, 4, 3, 8);
// console.log(ans);

// const persion = {
//   firstName: "manoj",
//   gender: "male",
//   age: 78,
// };
// function print({ firstName, gender, age }) {
//   console.log(firstName);
//   console.log(gender);
//   console.log(age);
// }
// print(persion);

// function myfun2(name) {
//   console.log("inside para");
//   console.log(`hello World ${name}`);
// }

// function myFun(callback) {
//   console.log("Hello world my function");
//   callback("manoj");
// }
// myFun(myfun2);

// function myFun() {
//   function hello() {
//     return "Hello manoj";
//   }
//   return hello;
// }

// const ans = myFun();
// console.log(ans());

const numbers = [3, 5, 6, 7];
// function multiply2(number, index) {
//   console.log(`index is ${number} number ${index}`);

// console.log("index is", index);
// console.log(`${number}*2=${number * 2}`);
// }
// numbers.forEach(function (number, index) {
//   console.log(`index is ${number} number ${index}`);
// });

// numbers.forEach(function (number) {
//   console.log(number * 3);
// });

// const users = [
//   { firstName: "mohit", age: "23" },
//   { firstName: "tapan", age: "75" },
//   { firstName: "harish", age: "65" },
//   { firstName: "mnoj", age: "43" },
// ];
// users.forEach(function (user, age) {
//   console.log(user.firstName);

// console.log(`Name is${user} age is ${age}`);
// });

// for (let user of users) {
//   console.log(user.firstName);
// }

// users.forEach((user, index) => {
//   console.log(user.firstName, index);
// });

// const users = [
//   { firstName: "mohit", age: "23" },
//   { firstName: "tapan", age: "75" },
//   { firstName: "harish", age: "65" },
//   { firstName: "mnoj", age: "43" },
// ];

// users.map((user, age) => {
//   console.log(`FirstName is ${user.firstName} and age is ${age}`);
// });

//filter method

// const num = [3, 4, 5, 6, 7];
// const isAdd = function (num) {
//   return num % 2 !== 0;
// };
// const evenNum = num.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(evenNum);

//reduce
// const number = [2, 3, 4, 5, 6, 7, 98];

// const sum = number.reduce((j, l) => {
//   return j + l;
// });
// console.log(sum);

// const userCard = [
//   { productId: 1, productName: "mobile", price: 12233 },
//   { productId: 2, productName: "laptop", price: 5433 },
//   { productId: 3, productName: "tv", price: 5111 },
//   { productId: 4, productName: "lcd", price: 1119 },
// ];

// const ans = userCard.reduce((a, b) => {
//   return a + b.price;
// }, 0);

// console.log(ans);

// const total = userCard.reduce((totalPrice, currentProduct) => {
//   return totalPrice + currentProduct.price;
// }, 0);

// console.log(total);

// const number = [57, 48, 6, 433, 666, 888];

// const userN = ["manoj", "harish", "jadu", "ZZZ", "@", "a"];
// const ans = number.sort();
// console.log(ans);
// const pat = userN.sort();
// console.log(pat);
// const number = [57, 48, 6, 433, 666, 888, 1];

// number.sort((a, b) => {
//   return b - a;
// });
// console.log(number);

// const products = [
// { productId: 1, productName: "p1", price: 300 },
// { productId: 2, productName: "p2", price: 400 },
// { productId: 3, productName: "p3", price: 5300 },
// { productId: 4, productName: "p4", price: 20 },
// { productId: 5, productName: "p5", price: 700 },
// { productId: 6, productName: "p6", price: 8300 },
// ];

// const ans = products.sort((a, b) => {
//   return b.price - a.price;
// }, 0);

// console.log(ans);

//Find Methods

// const myArray = ["hello", "cat", "dog", "lion"];
// function string(hello) {
//   return hello.length == 5;
// }
// const ans = myArray.find(string);
// const ans = string("hello");
// console.log(ans);

// const user = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 400 },
//   { productId: 3, productName: "p3", price: 5300 },
//   { productId: 4, productName: "p4", price: 20 },
//   { productId: 5, productName: "p5", price: 700 },
//   { productId: 6, productName: "p6", price: 8300 },
// ];
// const myProduct = user.find((user) => user.productId === 5);
// console.log(myProduct);

//every methods

// const num = [3, 4, 5, 6, 7];

// const ans = num.every((num) => num % 2 === 0);

// console.log(ans);

// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 400 },
//   { productId: 3, productName: "p3", price: 5300 },
//   { productId: 4, productName: "p4", price: 20 },
//   { productId: 5, productName: "p5", price: 700 },
//   { productId: 6, productName: "p6", price: 8300 },
// ];

// const ans = products.every((cartItem) => cartItem.price <= 300);
// console.log(ans);

// const num = [2, 3, 4, 6, 7];

// const ans = num.some((num) => num % 38 === 0);
// console.log(ans);

//fill methods

// const num = new Array(10).fill(2);
// console.log(num);

// const myArry = ["item", "item2", "item3"];

// myArry.slice(1, 1);
// myArry.splice(1, 0, "inserted item");
// const ans = myArry.splice(1, 2, "insertwd", "inser");

// console.log(myArry);

// const firstName = "Manoj";
// for (let char of firstName) {
//   console.log(char);
// }

// const myArry = { key1: "value1", key2: "value2" };

// for (let item of myArry) {
//   console.log(item);
// }

// const fastName = "manojan";
// console.log(fastName.length);
// console.log(fastName[2]);

// const myArry = { key1: "value1", key2: "value2" };

// const num = new Set();
// num.add(1);
// num.add(myArry);
// if (num.has(1)) {
//   console.log("1 is present");
// } else {
//   console.log("1 is not present");
// }
// console.log(num);

// const ids = {
//   1: "one",
//   person: "manoj",
// };
// console.log(ids["1"]);

// const person = new Map();
// person.set("firstName", "Manoj");
// person.set("age", 4);
// console.log(person);
// console.log(person.get(1));
// for (let key of person.keys()) {
//   console.log(key);
// }

// const user = {
//   firstName: "manoj",
//   adress: { houseNo: "123" },
// };

// console.log(user.firstName);
// console.log(user.adress.houseNo);

// function personInfo() {
//   console.log(`person name is ${this.firstName} and person is ${this.age}`);
// }
// const person = {
//   firstName: "manoj",
//   age: 30,
//   about: personInfo,
// };
// const person1 = {
//   firstName: "radhy",
//   age: 20,
//   about: personInfo,
// };
// const person2 = {
//   firstName: "tapan",
//   age: 10,
//   about: personInfo,
// };
// person.about();
// person1.about();
// person2.about();

// console.log(window);

// function myFun() {
//   console.log("hello world");
// }

// myFun.apply();

// const person = {
//   firstName: "manoj",
//   age: 30,
//   about: () => {
//     console.log(this.firstName, this.age);
//   },
// };
// person.about();

// const user = {
//   firstName: "manoj",
//   lastName: "Jena",
//   email: "mjena99h@gmail.com",
//   age: 23,
//   addresh: "house no,colony,pincode,state",
//   about: function () {
//     return `${this.firstName} is ${this.lastName} and age is ${this.age}`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(fastName, lastName, email, age, addresh) {
//   const user = {};
//   user.fastName = fastName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.addresh = addresh;
//   user.about = function () {
//     return `${this.firstName} is ${this.lastName} and age is ${this.age}`;
//   };
//   user.is18 = function () {
//     return this.age >= 18;
//   };
//   return user;
// }
// const user1 = createUser("maa", "tapan", "jadu@gmail.com", "22");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);

// function hello() {
//   console.log("my");
// }
// console.log(hello.prototype);
// if (hello.prototype) {
//   console.log("prototype is present");
// } else {
//   console.log("prototype is not present");
// }

// hello.prototype.abc = "abc";
// console.log(hello.abc());

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function () {
//   console.log(this.firstName, this.age);
// };
// const ans = new createUser("manoj", 28);

// ans.about();

// let num = [1, 2, 3, 4];
// let num = new Array(1, 2, 3, 4);
// console.log(Array.prototype);

// console.log(num);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   isSuper() {
//     return this.age <= 1;
//   }
//   isCute() {
//     return true;
//   }
// }

// const animl = new Animal("tom", 12, 87);

// console.log(animl);
// console.log(animl.eat());
// console.log(animl.isCute());
// console.log(animl.isSuper());

// class Dog extends Animal {
//   constructor(name, age, speed) {
//     super(name, age);
//     this.speed = speed;
//   }
// }
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   isSuper() {
//     return this.age <= 1;
//   }
//   isCute() {
//     return true;
//   }
// }

// const tommy = new Dog("tommy", 23, 42);
// console.log(tommy);

// console.log(tommy.eat());
// console.log(tommy.isCute());
// console.log(tommy.isSuper());

// class Persion {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get fullName() {
//     return `${this.firstName} is ${this.lastName}`;
//   }
//   setName(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const persion = new Persion("manoj", "jena", 28);
// console.log(persion.fullName());
// console.log(persion.fullName);
// console.log(persion.firstName);
// persion.setName("mohit", "sarma");
// console.log(persion.firstName);

// persion.firstName = "mohit";
// console.log(persion);
