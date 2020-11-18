//Imports
const db = require("../models");

//Exports
module.exports = (app) => {
  //Get Workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //Post Workout
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({ body })
      .then((dbNewWorkout) => {
        res.json(dbNewWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //Get Workout Range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkoutRange) => {
        res.json(dbWorkoutRange);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //Update Workout
  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } }
    )
      .then((dbUpdateWorkout) => {
        res.json(dbUpdateWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

};
