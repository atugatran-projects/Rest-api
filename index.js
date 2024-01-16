require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Set views folder
app.set("view engine", "hbs"); // Assuming you're using Handlebars
app.set("views", path.join(__dirname, "views"));


// Set partials folder
var hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Database Connection
require('./db/conn');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON requests
app.use(express.json());

// Router Port Listening
app.use(require('./router/routh'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
