const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const homePage = "index.html"

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/wip", function(req, res) {
    res.sendFile(__dirname + "/public/subpages/wip.html")
});

app.get("/about", function(req, res) {
    res.sendFile(__dirname + "/public/subpages/about.html")
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});