const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(Math.PI);
console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 246,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nahni pni");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "price", {
  //   writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${value} ${key}`);
  }
}
