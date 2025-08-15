const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.post("/", async (req, res) => {
  console.log("Incoming POST to /entry with:", req.body);
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const newEntry = new Entry({ title, content });
    await newEntry.save();
    res.status(200).json(newEntry);
  } catch (error) {
    console.log("Failed to save entry:", error);
    res.status(500).json({ error: "Failed to save entry" });
  }
});

router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find({});
    res.status(200).json(entries);
  } catch (error) {
    console.log("Failed to fetch entries:", error);
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Entry = require("../models/Entry");

// router.post("/", async (req, res) => {
//   // <-- Change 'reg' to 'req' here
//   console.log("Incoming POST to /entry with:", req.body); // <-- And here
//   try {
//     const { title, content } = req.body; // <-- And here

//     if (!title || !content) {
//       return res.status(400).json({ error: "Title and content are required" });
//     }

//     const newEntry = new Entry({ title, content });
//     await newEntry.save();
//     res.status(200).json(newEntry);
//   } catch (error) {
//     console.log("Failed to save entry:", error);
//     res.status(500).json({ error: "Failed to save entry" });
//   }
// });

// module.exports = router;
