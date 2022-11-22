//external imports
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const knexConnect = require("knex");

//internal import 
const signupRouter = require("./router/signupRouter");

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname,"public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing
app.use("/signup",signupRouter);

server.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`)
});
