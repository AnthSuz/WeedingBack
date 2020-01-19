const express = require("express");
const router = express.Router();

const Guest = require("../models/models_guest");

// CREATE
router.post("/createguest", async (req, res) => {
  try {
    const newGuest = new Guest({
      name: req.fields.name,
      username: req.fields.username
    });
    await newGuest.save();
    res.json("Guest Created");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// READ

// UPDATE

// DELETE

module.exports = router;
