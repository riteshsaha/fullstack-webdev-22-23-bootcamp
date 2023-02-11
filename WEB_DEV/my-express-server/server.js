const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
    //response.send("Hello"); 
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at riteshsaha10@gmail.com"); 
});

app.get("/about", function (req, res) {
    res.send("I am a Software Developer."); 
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Singing</li><li>Sketching</li><li>Watching football</li><li>Playing guitar</li></ul>");
})

app.listen(3000, function () {
    console.log("Server started at 3000"); 
});