const { v4: uuid } = require("uuid");

const workout = require("../database/workout");


const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = () => {
    return;
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-us", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-us", { timeZone: "UTC" })
    };
    const createdWorkout= workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};  

const updateOneWorkout = () => {
    return;
};

const deleteOneWorkouts = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkouts
};