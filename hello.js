const sayHello = function (name) {
  console.log("Hello " + name);
};

sayHello("Calliban");

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
};
sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello("John");
