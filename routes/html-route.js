//Imports
const path = require("path");

//Exports
module.exports = (app) => {
  //Root Page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }).catch(err => {
    res.json(err);
  });
  //Specific Exercise Page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  }).catch(err => {
    res.json(err);
  });
  //Statistics PAge
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  }).catch(err => {
    res.json(err);
  });
};
