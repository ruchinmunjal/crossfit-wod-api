const res = require("express/lib/response");
const service = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        res.status(400)
            .send({
                status: "Bad Request",
                data: {
                    error: "workout Id is required"
                }
            });
    }
    try {
        const record = service.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: record });
    } catch (error) {
        res.status(error?.status || 500)
            .send({
                status: "FAILED",
                data: {
                    error: error?.message || error
                }
            });
    }
}
module.exports = { getRecordForWorkout };