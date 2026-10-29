const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const Student = require("./models/Student");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(
  cors ({
    origin : 'http://localhost:5173'
  })
)
app.use(express.json());
// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI) 
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// fetch all student record
app.get("/api/students", async (req, res) => {
  try{
  const student = await Student.find();
  res.json(student);
  } catch(e) {
    res.json({
      message: e.message
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello world');
});
// post the data into database
app.post("/api/students", async (req, res) => {
  try{
  const student = await Student.create(req.body);
  res.json(student);
  } catch(e) {
    res.json({
      message: e.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening at http://localhost:${PORT}`);
});