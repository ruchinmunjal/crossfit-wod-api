const express = require("express");
const apicache = require("apicache");

const wc = require("../../controllers/workoutController");
const rc = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

router.get("/",cache("2 minutes"), wc.getAllWorkouts);
router.get("/:workoutId", wc.getOneWorkout);
router.get("/:workoutId/records", rc.getRecordForWorkout);

router.post("/", wc.createNewWorkout);

router.patch("/", wc.updateOneWorkout);
router.delete("/", wc.deleteOneWorkout);

module.exports = router;
