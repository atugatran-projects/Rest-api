require('dotenv').config()
const express = require('express');
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Database Connection
require('./db/conn');

// Listion Json
app.use(express.json());

// Router Port Listoning
app.use(require('./router/routh'));

app.listen(PORT, () => {
    console.log(`server is runnig at port no http://localhost:${PORT}`);
})
