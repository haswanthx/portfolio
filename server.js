/* server.js - Vercel Ready */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// FIX 1: Use process.cwd() so Vercel finds the folder
app.use(express.static(path.join(process.cwd(), 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'projects.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'contact.html'));
});

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Message from ${name}: ${message}`);
    res.send(`<h1>Message Received, ${name}! I will contact you at ${email} soon.</h1>`);
});

// FIX 2: Export app for Vercel
module.exports = app;

// Only listen if NOT running on Vercel (local testing)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}