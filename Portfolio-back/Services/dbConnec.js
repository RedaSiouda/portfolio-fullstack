const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('Please provide the MONGO_URI in the .env file');
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the database...');
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        throw err; // Re-throw the error for consistent error handling
    }
};

module.exports = { connectToDatabase };
