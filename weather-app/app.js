const request = require("request");
const chalk = require("chalk");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const name = process.argv[2];

if (!name) {
  console.log(chalk.red("Please provide the address"));
} else {
  geoCode(name, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log("Data : ", latitude, longitude, location);
      console.log("Forecast Data :", forecastdata);
    });
  });
}
// const readline = require("readline");

// const Interface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const name = Interface.question("", (name) => Interface.close);
// const url =
//   "http://api.weatherstack.com/current?access_key=fd905ca8b5e548643358356eecd809aa&query=17.3850,78.4867&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to find locaion");
//   } else {
//     const data = response.body;
//     temperature = response.body.current.temperature;
//     // console.log(response.body);
//     if (temperature > 30) {
//       console.log(
//         "The present temparature is " +
//           chalk.red(temperature) +
//           " so no rain will fall"
//       );
//     } else {
//       console.log(
//         "There might be chance to fall rain due to temparature " +
//           chalk.green(temperature)
//       );
//     }

//     console.log(data.current.weather_descriptions[0]);
//   }
// });

// GeoCode("Newyork", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });
// -----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// const url =
//   "http://api.weatherstack.com/current?access_key=fd905ca8b5e548643358356eecd809aa&query=78.474061,17.360589&units=m";

// request({ url: url, json: true }, (error, responce) => {
//   if (error) {
//     console.log("Unable to connect the server!");
//   } else if (responce.body.error) {
//     console.log("Unable to find the location!");
//   } else {
//     console.log(responce.body);
//     console.log(responce.body.current.temperature);
//   }
// });

// ---------------------------------------------------------------------------------------------
