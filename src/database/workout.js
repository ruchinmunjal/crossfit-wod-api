const db = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
    return db.workouts;
};

const createNewWorkout = (newWorkOut) => {
    const isAlreadyAdded = db.workouts.findIndex((workout) => workout.name === newWorkOut.name) > -1;
    if (isAlreadyAdded) { return; }
    db.workouts.push(newWorkOut);
    saveToDatabase(db);
    return newWorkOut;
};

module.exports = { getAllWorkouts, createNewWorkout };
