const greeter = (name = "Don", age) => {
  console.log("Hello " + name);
};

greeter("Jenni");
greeter();
greeter("Jenni", 25);
