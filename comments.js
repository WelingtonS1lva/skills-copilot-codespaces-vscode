// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of express
const app = express();

// Use middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory database
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a comment
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  const newComment = { id: comments.length + 1, name, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

