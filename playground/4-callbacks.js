// // setTimeout(() => {
// //   console.log("This is call back function, two seconds up");
// // }, 2000);

// // const names = ["hima", "chinna", "nani"];

// // const shortnames = names.filter((names) => {
// //   return names.length <= 3;
// // });

// // const geoLoc = (address, callback) => {
// //   setTimeout(() => {
// //     const data = {
// //       latitude: 0,
// //       longitude: 0,
// //     };
// //     callback(data);
// //   }, 2000);
// // };

// // // const data = geoLoc("Hyderabad");
// // // console.log(data);
// // geoLoc("Hyderabad", (sol) => {
// //   console.log(sol);
// // });

// const add = (a, b, callBack) => {
//   setTimeout(() => {
//     callBack(a + b);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum);
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     return data;
//   }, 2000);
// };
// geocode("Hyderabad", (data) => {
//   console.log(data);
// });
// // console.log(data);

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};
add(2, 3, (sum) => {
  console.log(sum);
});
