const db = require("./db.json");

const getAllWorkouts = () => {
    return db.workouts;
};

module.exports = { getAllWorkouts };