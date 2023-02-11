const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("resources"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var url = "https://us21.api.mailchimp.com/3.0/lists/8e5f9899d1";
    
    var options = {
        method: "POST",
        auth: "riteshsaha10:385ada70945c05bdc7c7fdc1c61b3c4d-us21"
    }
    
    const request = https.request(url, options, function (response) {        
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on('data', function (data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/signup-more", function (req, res) {
    res.redirect("/"); 
});

app.post("/failure", function (req, res) {
    res.redirect("/"); 
});

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT); 
});


// MailChimp API Key : 385ada70945c05bdc7c7fdc1c61b3c4d-us21
// Mailchimp Audience/List ID : 8e5f9899d1