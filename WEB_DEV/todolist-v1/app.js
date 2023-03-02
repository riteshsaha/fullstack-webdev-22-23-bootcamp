const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Even though we are pushing elements to this array but it can be made const 
// since it will only throw error when we try to assign entirely new value to the variable 
// and not when we push an element in it.Same applies for objects.
const items = ["Buy Raw Materials From Market", "Cook", "Eat Food"];
const workItems = [];
var globalVar = 3;
//var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//let today = new Date();
app.get("/", function (req, res) {
    //var day = days[today.getDay()];
    let day = date.getDate();
    //Understanding scopes of variables
    understandingScopes();
    console.log("Outside function (Local Variable): Error - localVar is not defined");
    console.log("Outside function (Global Variable): " + globalVar);

    res.render("lists", {listTitle: day, listItems: items});
});

app.post("/", function (req, res) {
    console.log(req.body);
    let item = req.body.itemName;
    
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});


app.get("/work", function (req, res) {
    res.render("lists", {listTitle: "Work", listItems: workItems});
})


app.post("/work", function (req, res) {
    let item = req.body.itemName;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about"); 
});

function understandingScopes() {
    var localVar = 5;
    console.log("Inside function (Local Variable): " + localVar);
    console.log("Inside function (Global Variable): " + globalVar);
     if (true) {
         var x = 2;
         let y = 4;
         const z = 6;
        console.log("Inside if/else/for/while statement : var x = " + x);
        console.log("Inside if/else/for/while statement : let x = " + y);
        console.log("Inside if/else/for/while statement : const z = " + z);
    }
    console.log("Outside if/else/for/while statement : var x = " + x);
    console.log("Outside if/else/for/while statement : Error - let y is not defined");
    console.log("Outside if/else/for/while statement : Error - const z is not defined");
}

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})