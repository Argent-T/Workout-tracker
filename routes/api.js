const db = require("../models");


module.exports = function(app){
    app.get("/api/workouts", function(req,res){
        db.Workout.find({}).then(function(workouts){
            console.log(workouts)
            res.json(workouts)
        })
    })
}