const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { Configuration, OpenAIApi } = require("openai");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index")
});

app.get("/wip", function(req, res) {
    res.render("wip")
});

app.get("/about", function(req, res) {
    res.render("about")
});

app.get("/publicate", function(req, res) {
    res.render("publicate")
});

app.get("/projects", function(req, res) {
    res.render("projects")
});

app.get("/state", function(req, res) {
    res.render("state")
});

app.get("/within-school", function(req, res) {
    res.render("within-school")
});

app.get("/inter-school", function(req, res) {
    res.render("inter-school")
});

app.get("/images/jashan.jpeg", function(req, res) {
    res.sendFile(__dirname + "/images/jashan.jpeg")
});

app.get("/images/elonbiography.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/elonbiography.jpg")
});

app.get("/images/faultinourstars.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/fault.jpg")
});

app.get("/images/artofwar.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/artofwar.jpg")
});

app.get("/images/timeline1.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline1.svg")
});

app.get("/images/timeline2.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline2.svg")
});

app.get("/images/timeline3.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline3.svg")
});

app.get("/images/timeline4.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline4.svg")
});

app.get("/images/timeline5.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline5.svg")
});

app.get("/images/timeline6.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline6.svg")
});

app.get("/images/timeline7.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline7.svg")
});

app.get("/images/timeline8.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline8.svg")
});

app.get("/images/timeline9.svg", function(req, res) {
    res.sendFile(__dirname + "/images/timeline9.svg")
});

app.get("/images/weaknesses.png", function(req, res) {
    res.sendFile(__dirname + "/images/weaknesses.png")
});

app.get("/images/publicate.jpeg", function(req, res) {
    res.sendFile(__dirname + "/images/publicate.jpeg")
});

app.get("/images/publicate1.png", function(req, res) {
    res.sendFile(__dirname + "/images/publicate1.png")
});

app.get("/images/publicate2.png", function(req, res) {
    res.sendFile(__dirname + "/images/publicate2.png")
});

app.get("/images/publicate3.png", function(req, res) {
    res.sendFile(__dirname + "/images/publicate3.png")
});


app.get("/videos/podcast.mp4", function(req, res) {
    res.sendFile(__dirname + "/videos/podcast.mp4")
});

app.get("/videos/publicate.mp4", function(req, res) {
    res.sendFile(__dirname + "/videos/publicate.mp4")
});

app.get("/images/fonts/biotif.woff2", function(req, res) {
    res.sendFile(__dirname + "/images/fonts/biotif.woff2")
});

app.get("/images/favicon-16x16.png", function(req, res) {
    res.sendFile(__dirname + "/images/png/favicon-16x16.png")
});

app.get("/images/favicon-96x96.png", function(req, res) {
    res.sendFile(__dirname + "/images/png/favicon-96x96.png")
});

app.get("/images/favicon-32x32.png", function(req, res) {
    res.sendFile(__dirname + "/images/png/favicon-32x32.png")
});

app.get("/images/codewithme.png", function(req, res) {
    res.sendFile(__dirname + "/images/png/codewithme.png")
});

app.get("/images/favicon/favicon.ico", function(req, res) {
    res.sendFile(__dirname + "/images/favicon/favicon.ico")
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});