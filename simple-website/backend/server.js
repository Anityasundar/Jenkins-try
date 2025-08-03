const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend (Node.js)!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
