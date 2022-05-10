const db = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllWorkouts = (filterParams) => {
  try {
    let workouts = db.workouts;
    if (filterParams.mode) {
      return db.workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    return workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const createNewWorkout = (newWorkOut) => {
  const isAlreadyAdded =
    db.workouts.findIndex((workout) => workout.name === newWorkOut.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name '${newWorkOut.name}' already exists`,
    };
  }
  try {
    db.workouts.push(newWorkOut);
    saveToDatabase(db);
    return newWorkOut;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneWorkout = (workoutId) => {
  const workout = db.workouts.find((workout) => workout.id === workoutId);
  if (!workout) {
    return;
  }
  return workout;
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = db.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }

  const updateWorkout = {
    ...db.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-us", { timeZone: "UTC" }),
  };
  try {
    db.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(db);
    return updatedWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = db.workout.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForDeletion === -1) {
    return;
  }

  try {
    db.workouts.splice(indexForDeletion, 1);
    saveToDatabase(db);
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
