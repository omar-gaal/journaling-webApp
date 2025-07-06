const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (reg, res) => {
  res.send("Hello from backend 👋");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http:localhost:{PORT}`);
});
