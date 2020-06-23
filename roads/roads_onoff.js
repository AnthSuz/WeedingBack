const express = require("express");
const router = express.Router();

router.get("/onoff", async (req, res) => {
  try {
    res.json("Back-end ON");
  } catch (error) {
    red.status(401).json("Back-end OFF");
  }
});

module.exports = router;
