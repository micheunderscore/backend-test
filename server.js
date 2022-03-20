const express = require("express");
const {
  getAllScores,
  createScore,
  getOneScore,
  deleteScore,
  updateScore,
} = require("./src/components/scores");

const app = express();

// Body parser for JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nuts prepped! 👍");
});

app.get("/scores", (req, res) => {
  getAllScores(req, res);
});

app.post("/scores", (req, res) => {
  createScore(req, res);
});

app.get("/scores/:id", (req, res) => {
  getOneScore(req, res);
});

app.delete("/scores/:id", (req, res) => {
  deleteScore(req, res);
});

app.put("/scores/:id", (req, res) => {
  updateScore(req, res);
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
