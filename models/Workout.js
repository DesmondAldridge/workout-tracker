//Imports
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Workout Constructor
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Please choose an exercise type:",
      },
      name: {
        type: String,
        required: "Please choose the name of an exercise:",
      },
      duration: {
        type: Number,
        required: "Please enter the duration in minutes:",
      },
      weight: {
        type: Number,
        required: "Please enter weight in lbs:"
      },
      reps: {
        type: Number,
        required: "Please enter the number of reps:"
      },
      sets: {
        type: Number,
        required: "Please enter the number of sets:"
      },
      distance: {
        type: Number,
        required: "Please enter the distance in feet:"
      },
    },
  ],
});

//Storing the model in a variable to export
const Workout = mongoose.model("Workout", workoutSchema);

//Exports
module.exports = Workout;
