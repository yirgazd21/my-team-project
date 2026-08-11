const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Dummy database simulation
const users = [];

// Register Route
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: "User registered successfully!" });
});

// Login Route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: "Login successful!", token: "fake-jwt-token-123" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(5000, () => console.log("Backend running on port 5000"));