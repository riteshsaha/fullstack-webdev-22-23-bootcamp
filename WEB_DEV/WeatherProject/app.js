const express = require("express");
const https = require("https"); // No need to separately install using npm becuase this is a native module ans is already installed.
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const cityName = req.body.cityName;
    const apiKey = "ea332656fbd33f76bdf73c257b06c773";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";
    https.get(url, function (response) {
        console.log(response);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + cityName + " is " + temp + " degress Celsius</h1>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        });
    })
});

app.listen(3000, function () {
    console.log("Server is running on port 3000."); 
});