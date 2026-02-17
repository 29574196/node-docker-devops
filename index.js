const express = require('express');
const app = express();

app.use(express.json());

// In-memory "database"
let users = [
  { id: 1, name: 'John Doe' }
];

// READ (Get all users)
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// CREATE (Add a user)
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Just for testing functionality
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;

// Only start the server if this file is run directly (not required by tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // Export for testing