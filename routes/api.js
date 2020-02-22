const db = require("../models");
const router = require("express").Router();
router.get("/api/workouts", function (req, res) {
    console.log('test')
    db.Workout.find({}).then(function (workouts) {
        console.log(workouts)
        res.json(workouts)
    })
})
module.exports = router