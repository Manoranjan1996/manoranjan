const user = {
  username: "manoj",
  loginCount: 9,
  singnedIN: true,

  getUserDetails: function () {
    console.log("got user details");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();

function user(username, loginCount, isLogin) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIN = isLogin;

  //   return this;
}

const userOne = new user("MANOJ", 5, true);

console.log(userOne);
