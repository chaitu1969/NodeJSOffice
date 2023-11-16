const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// Defined path for Express confi
const viewsPath = path.join(__dirname, "../templates/views");
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup Hanflebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to server!
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "chinna",
  });
});

app.get("/weather", (req, res) => {
  res.render("Weather", {
    title: "weather report",
    name: "chinna",
  });
});

app.get("/about", (reeq, res) => {
  res.render("about", {
    title: "About",
    name: "chinna",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Chinna",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Chinna",
    errorMessage: "Page not found",
  });
});

// app.get("", (req, res) => {}
//   res.send("<h1>This basic responce<h1>");
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "chinna",
//     Age: 23,
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("This is about page");
// });

// app.get("/weather", (req, res) => {
//   res.send({
//     forecaste: "Its cold here",
//     location: "Gadwal",
//   });
// });

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    // errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
