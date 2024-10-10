class User {
  constructor(username) {
    this.username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.usernmaae}`);
  }
}
const chai = new Teacher("manoj", "mjena@gmail.com", 12323);
chai.addCourse();
chai.logMe();
const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof Teacher);
