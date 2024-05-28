
const express = require("express");
const mongoose = require("mongoose");
const { addUser } = require("./handlers/userhandler");

const app = express();
const port = 3007;

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = await addUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/userDb", {
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


