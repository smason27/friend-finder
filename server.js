const express = require("express");
const path = require("path");
const htmlRoutes = require("./app/routing/apiRoutes")
const apiRoutes = require("./app/routing/apiRoutes")

const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/html", htmlRoutes);
// app.use(express.static("/resources"))

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
