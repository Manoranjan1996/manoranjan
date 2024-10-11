function User(email, password) {
  this.email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return (this._email = email.toUpperCase());
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return (this._password = password.toUpperCase());
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("manoranjn@gmail.com", "123431");
console.log(chai.email);
console.log(chai.password);
