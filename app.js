const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { Configuration, OpenAIApi } = require("openai");
const path = require("path");
const app = express();

// Add CSP headers
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vercel.live;"
    );
    next();
});

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error details:', {
        message: err.message,
        stack: err.stack,
        path: req.path,
        method: req.method
    });
    res.status(500).send('Something broke! Please check the server logs.');
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Log all requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

app.get("/", function(req, res) {
    try {
        res.render("index");
    } catch (error) {
        console.error('Error rendering index:', error);
        res.status(500).send('Error rendering page');
    }
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

app.get("/public/css/styles.css", function(req, res) {
    res.sendFile(__dirname + "/public/css/styles.css")
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

app.get("/sitemap.xml", function(req, res) {
    res.sendFile(__dirname + "/sitemap.xml")
});

app.get("/scripts/main.js", function(req, res) {
    res.sendFile(__dirname + "/public/javascript/main.js")
});

app.get("/images/speek.png", function(req, res) {
    res.sendFile(__dirname + "/images/speek.png")
});

app.get("/images/Simon_game.png", function(req, res) {
    res.sendFile(__dirname + "/images/Simon_game.png")
});

app.get("/images/2048.png", function(req, res) {
    res.sendFile(__dirname + "/images/2048.png")
});

app.get("/images/to_do_list.png", function(req, res) {
    res.sendFile(__dirname + "/images/to_do_list.png")
});

app.get("/images/emojibuy.png", function(req, res) {
    res.sendFile(__dirname + "/images/emojibuy.png")
});

app.get("/images/3hbets.png", function(req, res) {
    res.sendFile(__dirname + "/images/3hbets.png")
});

// Test route
app.get("/test", function(req, res) {
    res.json({
        status: "ok",
        message: "Server is running",
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

// Add a catch-all route for 404s
app.use((req, res) => {
    console.log(`404 - Not Found: ${req.path}`);
    res.status(404).render('404');
});

// Start server with error handling
const port = process.env.PORT || 3000;
app.listen(port, function(err) {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server started on port ${port}`);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Current directory:', __dirname);
});