/* server.js - The Backend */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes to serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Backend Logic: Handle Contact Form Submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real app, you would save this to a database (MongoDB) or email it.
    // For now, we log it to the server console to prove it works.
    console.log(`\n--- NEW MESSAGE RECEIVED ---`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`----------------------------\n`);

    // Send a success response back to the user
    res.send(`
        <h1 style="color:white; background:#0f0f11; height:100vh; display:flex; justify-content:center; align-items:center; font-family:sans-serif;">
            Message Received, ${name}! I will contact you at ${email} soon.
        </h1>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});