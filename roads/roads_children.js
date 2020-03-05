const express = require("express");
const router = express.Router();

const Children = require("../models/models_children");

// CREATE
router.post("/children/create", async (req, res) => {
  try {
    const newChildren = new Children({
      firstname: req.fields.firstname,
      name: req.fields.name
    });
    await newChildren.save();
    res.json(newChildren);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ
router.get("/children/read", async (req, res) => {
  try {
    const readChildren = await Children.find();
    res.json(readChildren);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE

// DELETE
router.post("/children/delete/:id", async (req, res) => {
  console.log("req", req.params.id);
  try {
    const deleteChildren = await Children.findById(req.params.id);
    if (deleteChildren) {
      await deleteChildren.remove();
      console.log("here");
      res.json({ message: "Enfant Supprimé" });
    } else {
      res.status(401).json({ message: "Enfant non trouvé" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
