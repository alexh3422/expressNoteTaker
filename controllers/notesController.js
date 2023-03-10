const express = require('express');
const router = express.Router();
const fs = require("fs")
const uuid = require("uuid");

// get route to get all notes
router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        res.status(500).send("Whoops!");
        throw err;
      } else {
        const notesData = JSON.parse(data);
        res.json(notesData);
      }
    });
  }
);

// post route to add new notes
router.post("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Whoops!");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            req.body.id = uuid.v4();
            notesData.push(req.body);
            console.log(req.body)
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("Whoops!");
                    throw err;
                } else {
                    res.send("data added!");
                }
            });
        }
    });
});

// get route to get notes by id
router.get("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Whoops!");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            for (let i = 0; i < notesData.length; i++) {
                const note = notesData[i];
                if (note.id == req.params.id) {
                    return res.json(note);
                }
            }
           
        }
    });
});

// delete route to delete notes by id
router.delete ("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Whoops!");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            for (let i = 0; i < notesData.length; i++) {
                const note = notesData[i];
                if (note.id == req.params.id) {
                    notesData.splice(i, 1);
                    fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                        if (err) {
                            res.status(500).send("Whoops!");
                            throw err;
                        } else {
                            res.send("note deleted!");
                        }
                    });
                }
            }
           
        }
    });
});






module.exports = router;