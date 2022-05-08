const express = require("express");
const wc = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", wc.getAllWorkouts);
router.get("/:workoutId", wc.getOneWorkout);


router.post("/", wc.createNewWorkout);

router.patch("/", wc.updateOneWorkout);
router.delete("/", wc.deleteOneWorkout);

module.exports = router;