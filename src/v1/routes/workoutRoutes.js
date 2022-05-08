const express= require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Get All workouts");
});

router.post("/", (req,res) => {
    res.send("Create a new workout");
});
router.patch("/", (req,res) => {
    res.send("Update an existing workout");
});
router.delete("/", (req,res) => {
    res.send("Delete an existing workout");
});

module.exports = router;