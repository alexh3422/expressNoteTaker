const express = require("express");
const app = express();

// port variable for heroku/localhost
const PORT = process.env.PORT || 3000;

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));


const allRoutes = require("./controllers");
app.use(allRoutes)

// listener for port
app.listen(PORT, function () {
  console.log("listening on port: " + PORT);
});


