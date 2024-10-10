// let myName = "manoj   ";
// let myChannel = "chai   ";

// console.log(myName.trueLength);

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPOwer: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.manoj = function () {
  console.log(`manoj is present in all object`);
};

Array.prototype.heyManoj = function () {
  console.log(`Manoj says hello`);
};

// heroPower.manoj();
// myHero.heyManoj()
// myHero.manoj()

const user = {
  name: "chai",
  email: "mjena@gmail.com",
};

const Teacher = {
  makeVedio: true,
};

const TeachingSupport = {
  isAvailable: true,
};
const TASupport = {
  makeAsistance: "JS assisitant",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = user;
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiaurCode    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`Tru length is :${this.trim().length}`);
};
anotherUsername.trueLength();
"manoj".trueLength();
"iceTea".trueLength();
