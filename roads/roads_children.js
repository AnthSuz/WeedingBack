const express = require("express");
const router = express.Router();

const Children = require("../models/models_children");

// CREATE
router.post("/createchildren", async (req, res) => {
  try {
    const newChildren = new Children({
      firstname: req.fields.firstname,
      name: req.fields.name
    });
    await newChildren.save();
    res.json("Children Created");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ
router.get("/readlistchildren", async (req, res) => {
  try {
    const readChildren = await Children.find();
    res.json(readChildren);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE

// DELETE

module.exports = router;
