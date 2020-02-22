const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
day:{
    type: Date
},
exercises:{
    type: Array
}
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