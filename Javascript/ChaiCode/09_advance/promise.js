const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async taks is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Async 2 resolve");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "chai", email: "chai@gmail.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
  //   console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "manoj", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resole and resolve"));

promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E :", error);
//   }
// }
// getAllUser();
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
