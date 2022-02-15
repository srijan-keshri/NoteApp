const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();
app.get("/", (req, res) => {
  res.status(200).send("this is my first server");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(note);
  res.send(note);
});
const PORT = process.env.PORT || 5012;

app.listen(PORT, console.log(`server started on port ${PORT}`));
