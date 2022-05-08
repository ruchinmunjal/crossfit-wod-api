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
    const { body } = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.status(400).send({ status: "Bad Request" })
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    const createdWorkout = service.createNewWorkout(newWorkout);
    res.status("201").send({ status: "OK", data: createdWorkout });
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