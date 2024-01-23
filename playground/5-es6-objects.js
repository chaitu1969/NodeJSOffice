// const name = "Hima";
// const Age = 26;

// const user = {
//   name,
//   UserAge: Age,
//   location: "Gadwal",
// };
// console.log(user);

// Object Destructuring

const Movie = {
  name: "bahubali",
  hero: "Prabhas",
  villan: "rana",
  release: 2015,
  stock: 5.6,
};
// const { name, hero, Year } = Movie;
// console.log(name);
// console.log(Movie);
// Movie("King");

const trasaction = (type, { lable, stock = 0 } = {}) => {
  console.log(type, lable, stock);
};

trasaction("order", Movie);
