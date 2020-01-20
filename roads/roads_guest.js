const express = require("express");
const router = express.Router();

const Guest = require("../models/models_guest");

// CREATE
router.post("/createguest", async (req, res) => {
  try {
    const newGuest = new Guest({
      name: req.fields.name,
      firstname: req.fields.firstname,
      presence: req.fields.presence,
      numberPhone: req.fields.numberPhone,
      numberAdult: req.fields.numberAdult,
      numberChildren: req.fields.numberChildren
    });
    await newGuest.save();
    res.json("Guest Created");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// READ
router.get("/readlistguest", async (req, res) => {
  try {
    const readGuest = await Guest.find();
    res.json(readGuest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE

// DELETE

module.exports = router;
