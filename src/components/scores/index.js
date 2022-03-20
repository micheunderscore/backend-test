const { remove, findIndex, find } = require("lodash");

var scores = [
  { id: "01", score: 40 },
  { id: "02", score: 66 },
  { id: "03", score: 76 },
];

const getAllScores = (req, res) => {
  res.send(scores);
};

const getOneScore = (req, res) => {
  const { id } = req.params;
  console.log(`ID: ${id}(${typeof id})`);
  res.send(find(scores, { id }) || "ERROR: unknown ID");
};

const deleteScore = (req, res) => {
  const { id } = req.params;
  console.log(`ID: ${id}(${typeof id})`);
  removed = remove(scores, (item) => item.id === id);
  if (removed.length > 0) {
    res.send(`successful delete\n${JSON.stringify(removed)}`);
  } else {
    res.send(`failed to delete: ${id}`);
  }
};

const updateScore = (req, res) => {
  const { id } = req.params;
  const { score } = req.body;
  console.log(`ID: ${id}(${typeof id})\n`, `Score: ${score}(${typeof score})`);
  updatedScore = findIndex(scores, (item) => item.id === id);
  if (updatedScore !== -1) {
    scores[updatedScore].score = parseInt(`${score}`);
    res.send(`successful update\n${JSON.stringify(scores[updatedScore])}`);
  } else {
    res.send(`failed to update: ${id}`);
  }
};

const createScore = (req, res) => {
  const { id, score } = req.body;
  scores.push({ id: `${id}`, score: parseInt(`${score}`) });
  res.send(scores.slice(-1)[0]);
};

module.exports = {
  getAllScores,
  getOneScore,
  deleteScore,
  updateScore,
  createScore,
};
