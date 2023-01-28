const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

  
const notesRoute = require("./notesController.js");
router.use("/api/notes",notesRoute);





module.exports = router;