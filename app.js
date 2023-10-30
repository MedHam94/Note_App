require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Static Files
app.use(express.static("public"));

// Template engine

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

// Routes
app.use("/", require("./server/routes/index"));

app.listen(PORT, console.log(`App listening on Port ${PORT}`));
