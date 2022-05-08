const service = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = service.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
    const workout = service.getOneWorkout();

    res.send("Get one workout");
};

const createNewWorkout = (req, res) => {
    const createdWorkout = service.createNewWorkout();
    res.send("Created a new workout");
};

const updateOneWorkout = (req, res) => {
    const updateWorkout = service.updateOneWorkout();
    res.send("Updated one workout");
};


const deleteOneWorkout = (req, res) => {
    service.deleteOneWorkouts();
    res.send("Deleted an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}