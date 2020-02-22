const db = require("../models");
const router = require("express").Router();


router.get("/api/workouts", function (req, res) {

    db.Workout.find({}).then(function (workouts) {
        console.log(workouts)
        res.json(workouts)
    })
})
router.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => {
            res.status(400).json(err)
        });
});

router.get("/api/workouts/range", function (req, res) {

    db.Workout.find({}).then(function (workouts) {
        console.log(workouts)
        res.json(workouts)
    })
})



module.exports = router