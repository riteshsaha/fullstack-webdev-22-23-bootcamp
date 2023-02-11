const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const { firstnum, secondnum } = req.body;
    var sum = Number(firstnum) + Number(secondnum);
    res.send("The sum of " + firstnum + " and " + secondnum + " is " + sum);
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    const { weight, height } = req.body;
    var bmi = Number(weight) / Math.pow(Number(height), 2);
    res.send("The BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
})