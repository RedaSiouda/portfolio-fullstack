const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();

const db = require('./Services/dbConnec');
const routes = require('./Routes/formRoute');

const path = require('path');

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));



// Routes
app.use('/api/v1', routes);


// Initialization of the port via .env
const PORT = process.env.PORT || 3000; // Use a default port if PORT is not specified in .env

// Connect to the database and start the server
const startServer = async () => {
    try {
        await db.connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Connected to the server on port ${PORT}...`);
        });
    } catch (err) {
        console.error('Failed to connect:', err);
        process.exit(1); // Terminate the application with an error status
    }
};

startServer();
