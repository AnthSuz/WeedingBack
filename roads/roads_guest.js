const express = require("express");
const router = express.Router();

const Guest = require("../models/models_guest");

// CREATE
router.post("/guest/create", async (req, res) => {
  try {
    const newGuest = new Guest({
      name: req.fields.name.toUpperCase(),
      firstname: req.fields.firstname.toUpperCase(),
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
router.get("/guest/read", async (req, res) => {
  try {
    const readGuest = await Guest.find();
    res.json(readGuest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ BY ID
router.get("/guest/read/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const readGuestById = await Guest.findById(id);
    res.json(readGuestById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE
router.post("/guest/update", async (req, res) => {
  try {
    console.log("req.fields", req.fields);
    let id = req.fields._id;
    let {
      name,
      firstname,
      presence,
      numberPhone,
      numberAdult,
      numberChildren
    } = req.fields;

    let listToUpdate = await Guest.findById(id);
    if (name) {
      listToUpdate.name = name;
    }
    if (firstname) {
      listToUpdate.firstname = firstname;
    }
    if (presence) {
      listToUpdate.presence = presence;
    }
    listToUpdate.numberPhone = numberPhone;
    listToUpdate.numberAdult = numberAdult;
    listToUpdate.numberChildren = numberChildren;
    await listToUpdate.save();
    res.json(listToUpdate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.post("/guest/delete/:id", async (req, res) => {
  try {
    const deleteGuest = await Guest.findById(req.params.id);
    if (deleteGuest) {
      await deleteGuest.remove();
      res.json({ message: "Invité supprimé" });
    } else {
      res.status(401).json({ message: "Invité non trouvé" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
