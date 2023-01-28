const express = require('express');
const router = express.Router();
const path = require("path");


// sets route for index.html (home page)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// sets route for notes.html (notes page)
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

//sets route for notes controller to read from
const notesRoute = require("./notesController.js");
router.use("/api/notes",notesRoute);





module.exports = router;