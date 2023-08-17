const express = require("express");
const router = express.Router();

// Load Day model
const Day = require("../../../../models/Day");

// @route GET api/weather/test
// @description tests weather route
// @access Public
router.get("/test", (req, res) => res.send("day route testing!"));

// @route GET api/weather
// @description Get all weather
// @access Public
router.get("/", (req, res) => {
  Day.find()
    .then((weather) => res.json(weather))
    .catch((err) =>
      res.status(404).json({ noweatherfound: "No Weather found" })
    );
});

// @route GET api/weather/:id
// @description Get single day by id
// @access Public
router.get("/:id", (req, res) => {
  Day.findById(req.params.id)
    .then((day) => res.json(day))
    .catch((err) => res.status(404).json({ nodayfound: "No Day found" }));
});

// @route GET api/weather
// @description add/save day
// @access Public
router.post("/", (req, res) => {
  Day.create(req.body)
    .then((day) => res.json({ msg: "Day added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this day" }));
});

// @route GET api/weather/:id
// @description Update day
// @access Public
router.put("/:id", (req, res) => {
  Day.findByIdAndUpdate(req.params.id, req.body)
    .then((day) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/weather/:id
// @description Delete day by id
// @access Public
router.delete("/:id", (req, res) => {
  Day.findByIdAndRemove(req.params.id, req.body)
    .then((day) => res.json({ mgs: "Day entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a day" }));
});

module.exports = router;
