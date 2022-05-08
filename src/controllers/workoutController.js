const service = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = service.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;
    if (!workoutId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
          });
    }

    const workout = service.getOneWorkout(workoutId);

    res.send({ status: "OK", data: workout });
};

const createNewWorkout = (req, res) => {
    const { body } = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.status(400).send({
            status: "Bad Request", data: {
                error: "One of the following keys is missing or is missong in request body : 'name', 'mode', 'equipment', 'exercises', 'trainerTips'"
            }
        })
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    try {
        const createdWorkout = service.createNewWorkout(newWorkout);
        res.status(201).send({ status: "OK", data: createdWorkout });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateOneWorkout = (req, res) => {
    const {
        body,
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return res.status(400).send("Bad request");
    }

    const updateWorkout = service.updateOneWorkout(workoutId, body);
    res.send({ status: "OK", data: updatedWorkout });
};


const deleteOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;
    if (!workoutId) {
        res.status(400).send("Bad Request");
    }
    service.deleteOneWorkouts(workoutId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}