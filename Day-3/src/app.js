const express = require("express");

const app = express();

app.use(express.json());

const notes = []

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);

    console.log(notes);

    res.send("Note added!")
})

app.get("/notes", (req, res) =>{
    res.send(notes);
})

app.delete("/notes/:id", (req, res) => {
    console.log(req.params);
    delete notes[req.params.id]

    res.send("Note deleted!");
})

app.patch("/notes/:id", (req, res) => {
    notes [req.params.id].description = req.body.description
    res.send("Note updated!")
})

module.exports = app;