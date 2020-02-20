const db = require("../models");
const router = require("express").Router();

module.exports = function(app){
    router.get("/api/workouts", function(req,res){
        db.Workout.find({}).then(function(workouts){
            console.log(workouts)
            res.json(workouts)
        })
    })
}