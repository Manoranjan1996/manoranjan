// firstName = "Manoj";
// age = age + "";
// conslet age = 22;
// ole.log(typeof (age))

// let string1 = "12";
// let string2 = "54"
// let firstName = +string1+ +string2;
// console.log(typeof firstName)

// let age = 22;
// firstName = 'manoj';
// aboutMe = `my name is ${firstName} and age is ${age}`
// console.log(aboutMe)

// let myNmber = BigInt(65);
// let sameMyNmber = 15n;
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(myNmber+sameMyNmber)

// let num1 = "7";
// let num2 = 8;
// console.log(num1<=num2)
// console.log(num1 === num2)
// console.log(num1 !== num2)

// let age =12;
// if(age>=18){
//     console.log("User can play sslc");
// }else{
//     console.log("User PLaygame")
// }
// let num = 11;
// if(num%2===0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

// let firstName = "Naboj";
// if(firstName){
//     console.log(firstName)
// }else{
//     console.log("firstName is empty")
// }

// let age = 1;
// let drink;

// if(age>=5){
//     drink = "coffe";
// }else{
//     drink = "milk";
// }
// console.log(drink)

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk"
// console.log(drink)

// let firstName = "Manoj";
// let age = 22;

// if(firstName[0] === "M" && age>25){
//     console.log("Your name is H")
// }else{
//     console.log("inside else")
// }

// let winningNumber = 19;
// let userGuss = +prompt("Guess a number")
// console.log(typeof userGuss)

// if(userGuss === winningNumber){
//     console.log("Your guss is right")
// }else{
//     if(userGuss>winningNumber){
//         console.log("high")
//     }else{
//         console.log("low")
//     }
// }

// let temperature = +prompt("guess a Number");

// if(temperature < 0){
//     console.log("Extrimely Cold Temp...")
// }else if(temperature < 16){
//     console.log("It is cold out Side")
// }else if(temperature < 25){
//     console.log("wether is okey")
// }else if(temperature < 35){
//     console.log("Lets go for Swim")
// }else if(temperature < 45){
//     console.log("turn on AC")
// }else{
//     console.log("Too Hot")
// }

// let temperature = 25; //else if

// if(temperature < 0){
//     console.log("Extrimely Cold Temp...")
// }else if(temperature < 16){
//     console.log("It is cold out Side")
// }else if(temperature < 25){
//     console.log("wether is okey")
// }else if(temperature < 35){
//     console.log("Lets go for Swim")
// }else if(temperature < 45){
//     console.log("turn on AC")
// }else{
//     console.log("Too Hot")
// }

// Swith Statement

// let day = 2 ;
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Munday")
//         break;
//     case 2:
//         console.log("Tuseday")  
//         break;  
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Friday") 
//         break;   
//     case 5:
//         console.log("Suterday")
//         break;
//     default:
//         console.log("Invalid Day")
// }

//while loop//

// let i = 0;
// while(i<=3){
//     console.log(i)
//     i++
// }
// console.log(`current value of ${i}`)
// console.log("hello")

// let num = 10;
// // let total = 0;
// // let i = 0;
// // while(i<=10){
// //     total = total + i;
// //     i++
// // }

// console.log(total)

// let i =0;
// for(let i = 0;i<=9;i++){
//     console.log(i);
// }

// let total = 0;
// let num = 10;
// for(let i = 0;i<=num;i++){
//     total = total+i;
// }
// console.log(total)

//break & Contineu

// let i =0;
// for(let i = 0;i<=9;i++){
//     if(i===4){
//         continue
//     }
//     console.log(i)
// }
// console.log("hello there";
// )

//do while loop

// let i = 10;
// while(i<=9){
//     console.log(i)
//     i++;
// }

// do{
//     console.log(i);
//     i++
// }while(i<=9)

// let fruit = ["apple","mengo","graps"];
// // let misx = [1,2,3,4,5,"jjk","sij","iew"]
// console.log(fruit);
// // console.log(misx)
// fruit[1] = "banana"
// console.log(fruit)
// console.log(typeof fruit)

// let fruit = ["apple","mengo","graps"];
// console.log(fruit)
// fruit.push("banana")
// console.log(fruit)
// console.log(fruit.pop())
// console.log(fruit)
// fruit.unshift("banana")
// fruit.shift();
// console.log(fruit)

//premative vs referance

// let num1 = 6;
// let num2 = num1;
// console.log("Value of num1",num1)
// console.log("Value of num2", num2)
// num1++;
// console.log(num1)
// console.log(num2)

// let arry1 = ["item1", "item2"]
// arry2 = arry1;
// console.log(arry1)
// console.log(arry2)
// arry1.push("item3")
// console.log(arry1)
// console.log(arry2)

// let arry1 = ["item1", "item2"]
// let arry2 = ["item1", "item2"]
// let arry2 = [].concat(arry1);
// let arry2 = [...arry1];
// let arry2 = arry1.concat(["item3", "item4"])
// arry1.push("item3")
// console.log(arry1 === arry2)
// console.log(arry1)
// console.log(arry2)

// let fruit = ["apple","mango","graps","banana"];
// // console.log(fruit.length)
// // console.log(fruit[fruit.length-3])
// for(let i = 0;i<fruit.length; i++){
//     console.log(fruit[i].toUpperCase())
// }

// const pi = 3.1
// console.log(pi)

// const fruits = ["apple","mango","graps","banana"];
// const fruits2 = [];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase())
// }
// console.log(fruits2)

// const fruits = ["apple","mango","graps","banana"];
// const fruits2 = [];
// for(let index in fruits){
//     fruits2.push(fruits[index])
// }   
// console.log(fruits2)

// const myArray = ["value1", "value2", "value3", "value4"]
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myvar1", myVar1);
// console.log("value of myvar2", myVar2);

// let [myVar1, myVar2] = myArray;
// let myNewArray = myArray.slice(1)
// console.log("value of myvar1", myVar1);
// console.log("value of myvar2", myVar2);
// console.log(myNewArray)

//object referance type


// // const persion = {name:"Manoj",age:23};
// const persion = {
//     name:"manoj",
//     age:23,
//     hobbies:["game","eatting","sleeping"]
// }
// console.log(persion.name)
// console.log(persion.name)
// console.log(persion.age)

// persion.gender = "male";
// console.log(persion)
// const key = "email";
// const persion = {
//     name:"manoj",
//     age:23,
//     hobbies:["game","eatting","sleeping"]
// }
// console.log(persion.name)
// persion[key] = "mjena99h@gmail.com";

// console.log(persion)

// for(let key in persion){
//     console.log(`${key}:${pe}`)
// }

//Computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj)

//spered oprater
// const arry1 = [1, 2, 3, 4]
// const arry2 = [5, 6, 7, 8]
// // const myNewArray = [...arry1,...arry2]
// const myNewArray = [..."abc"]
// console.log(myNewArray)

//spread operater
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }
// const newObject = {..."abcdefghijklmnopqrstuvwxyz"}
// console.log(obj1)
// console.log(newObject)

//destucturing object

// const band = {
//     bandName: "led zeppop",
//     famouseSong: "mahiya",
// };
// const bandName = band.bandName;
// const famouseSong = band.famouseSong;
// console.log(bandName,famouseSong)
// console.log(band)

// const {bandName,famouseSong} = band;
// console.log(bandName, famouseSong)

//object inside array

// const users = [
//     {userId: 1, firstName: "Manoj", gender: "Male"},
//     {userId: 2, firstName: "Rahul", gender: "Femal"},
//     {userId: 3, firstName: "Tapan", gender: "Trasender"},
// ]
// for(let user of users){
//     console.log(user.gender)
// }

// nested destrucuring

// const users = [
//     {userId: 1, firstName: "Manoj", gender: "Male"},
//     {userId: 2, firstName: "Rahul", gender: "Femal"},
//     {userId: 3, firstName: "Tapan", gender: "Trasender"},
// ]

// const [user1, user2, user3] = users;
// const [{firstName: user1firstName, userId}, , {gender: hello}] = users;
// console.log(user1firstName)
// console.log(userId);
// console.log(hello)

//function woork

// function singHappyBarthday(){
//     console.log("Happ Barthday to you....")
// }

// singHappyBarthday();

// function two(){
//     console.log(2+6);
// }

// two();
// function two(){
//     return 2+6;
// }
// const three = two();
// console.log(three);

//Find Methods

// const myArray = ["hello", "bolo", "cat", "dog"]
// function isLength3(string){
//     return string.length ===3;
// }

// const ans = myArray.find((String)=>String.length===3)
// console.log(ans);

// const users = [
//     {userId:1, userName: "Manoj"},
//     {userId:2, userName: "Mdoj"},
//     {userId:3, userName: "vcnoj"},
//     {userId:4, userName: "Mxcnoj"},
// ]
// const myUser = users.find((user)=>user.userId===3)
// console.log(myUser)

//Every Methods

// const numbers = [2, 3, 4, 5, 6]
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans)

//  const users = [
//      {userId: 1, firstName: "Manoj", gender: "Male"},
//      {userId: 2, firstName: "Rahul", gender: "Femal"},
//      {userId: 3, firstName: "Tapan", gender: "Trasender"},
//  ]
// const ans = users.every((user)=>user.firstName===0)
// console.log(ans)

//Some Methods

// const numbers = [2, 3, 11, 5, 6]
// const ans = numbers.some((number)=>number%2===0);
// console.log(ans)

//Optional Chaining

// const user = {
//     firsName: "Manoj",
//     addresh: {houseNumber: 12344}
// }

// console.log(user?.firsName)
// console.log(user?.addresh.houseNumber)

//Method

// const personInfo = function(){
//     console.log(`Person Name is ${this.firstName} and age is ${this.age} `)
// }

// const persion1 = {
//     firstName: "Manoj",
//     age:162,
//     about: personInfo
// }
// const persion2 = {
//     firstName: "Tapan",
//     age:152,
//     about: personInfo
// }
// const persion3 = {
//     firstName: "Avay",
//     age:1234,
//     about: personInfo
// }
// const persion4 = {
//     firstName: "RAdha",
//     age:123,
//     about: personInfo
// }

// persion1.about()
// persion2.about()
// persion3.about()
// persion4.about()

// "use strict"
// function myFun(){
//     console.log(this)
// }
// myFun()

//Call & Apply Method

const user1 = function(hubby, gitter){
    console.log(this.firstName, this.age, hubby, gitter)
}

const persion1 = {
    firstName: "Manoj",
    age:162,
    about: user1
 }

 const persion2 = {
    firstName: "Mansssoj",
    age:122,
 }

// about.apply(persion1, ["game", "play"]);
const ans = about.bind(persion2, "game","play" )
ans()








