const { v4: uuid } = require("uuid");

const workout = require("../database/workout");


const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (workoutId) => {
    const workOut = workout.getOneWorkout(workoutId);
    return workOut;
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-us", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-us", { timeZone: "UTC" })
    };

    try {
        const createdWorkout = workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }
    catch (error) {
        throw error;
    }

};

const updateOneWorkout = (workoutId, changes) => {
    try {
        const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
        return updateOneWorkout;
    } catch (error) {
        throw error;
    }
};

const deleteOneWorkouts = (workoutId) => {
    try {
        workout.deleteOneWorkouts(workoutId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkouts
};