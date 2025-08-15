const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000", // or "*" for all origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const entryRoutes = require("./routes/entryRoutes");
app.use("/entry", entryRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.log("❌ MongoDB connection error:", error));

// Teest route

app.get("/", (req, res) => {
  res.send("Backend is working!");
  // ƒ;
});

app.listen(5001, () => {
  console.log("🚀 Server running on http://localhost:5001");
});

// {
//   "content": "This is a test journal entry."
// }
