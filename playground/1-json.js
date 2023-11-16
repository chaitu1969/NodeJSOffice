const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');

console.log(dataBuffer)
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

console.log(dataJSON);
console.log(user);

user.name = 'k';
user.Age = 25;

console.log(user);

fs.writeFileSync('1-json.json',dataJSON);




















// const book = {
//     title: 'Harry potter',
//     author: 'Jk rowling'
// }
// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// const parsedata = JSON.parse(bookJson);
// console.log(parsedata.title);

// fs.writeFileSync('1-json.json',bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(dataJson)
// console.log(data)
// console.log(data.title)