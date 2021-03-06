const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Name of exercise is required."

      },
      type: {
        type: String,
        trim: true,
        required: "Type of exercise is required."

      },
      weight: {
        type: Number,

      },
      sets: {
        type: Number,

      },
      reps: {
        type: Number,

      },
      duration: {
        type: Number,
        required: "Duration (minutes) of exercise is required."

      },
      distance: {
        type: Number,

      },
    }
  ]
},
  {
    toJSON: {
      virtuals: true
    }
  });
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, activity) => {
    return total + activity.duration;
  }, 0);
});
const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;