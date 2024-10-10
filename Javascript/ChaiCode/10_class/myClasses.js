// class User {
//   constructor(usernmaae, email, password) {
//     this.usernmaae = usernmaae;
//     this.email = email;
//     this.password = password;
//   }
//   encriptPassword() {
//     return `${this.password}  abc`;
//   }
//   changeUser() {
//     return `${this.usernmaae.toUpperCase()}`;
//   }
// }

// const chai = new User("manoj", "mjena@gmail.com", 123);
// console.log(chai.encriptPassword());
// console.log(chai.changeUser());

function User(usernmaae, email, password) {
  this.usernmaae = usernmaae;
  this.email = email;
  this.password = password;
}

User.prototype.encriptPassword = function () {
  return `${this.password}  abc`;
};
User.prototype.changeUser = function () {
  return `${this.usernmaae.toUpperCase()}`;
};

const tea = new User("Tapan", "mjena@gmail.com", 1213);
console.log(tea.encriptPassword());
console.log(tea.changeUser());
