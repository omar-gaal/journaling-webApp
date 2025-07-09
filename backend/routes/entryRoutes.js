const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.post("/", async (req, res) => {
  console.log("Incoming POST to /entry with:", req.body); // 🔍
  try {
    const newEntry = new Entry({ content: req.body.content });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: "Failed to save entry" });
  }
});

module.exports = router;
