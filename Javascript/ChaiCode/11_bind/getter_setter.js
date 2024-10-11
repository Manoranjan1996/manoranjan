class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    return (this._email = value);
  }
  get password() {
    return `${this._password} manoj`;
  }
  set password(value) {
    this._password = value;
  }
}
const manoj = new User("manoj@gmail.com", "12ajdkns345");
console.log(manoj.password);
console.log(manoj.email);
