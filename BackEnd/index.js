const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_tffkh",
	password: "42l4ZAN3vm4NzzrI",
	database: "lab_blank01_t3hqir",
});

connection.connect(() => {
	console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;
// Create express app
const app = express();
const port = 5000;

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());
//frontend path
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
// Register endpoints
app.post("/adminLogin", require("./AdminLogin"));
app.post("/adminRegister", require("./AdminRegister"));
app.post("/adminAdd", require("./AddMovie"));
app.get("/adminhome", require("./showMovie"));
app.get("/adminUpdate/:movieId", require("./getEachMovie"));
app.patch("/adminUpdate/:movieId", require("./Update"));
app.delete("/adminhome/:movieId", require("./Delete"));
//user path
app.post("/register", require("./UserRegister"));
app.post("/login", require("./UserLogin"));
app.get("/search/:findWord", require("./Search"));
app.get("/newRelease", require("./NewRelease6"));
app.get("/newReleaseAll", require("./NewAll"));
app.patch("/countUpdate/:movieId/:count", require("./CountUpdate"));
app.get("/topMovie", require("./TopAll"));
app.get("/top4", require("./TopMovie6"));
app.get("/all", require("./showMovie"));
app.get("/all4", require("./AllMovie"));
app.get("/detail/:movieId", require("./getEachMovie"));
app.post("/review/:movieId", require("./MovieReview"));
app.get("/userID/:username", require("./Id"));
app.get("/showReview/:movieId", require("./ShowReview"));
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});