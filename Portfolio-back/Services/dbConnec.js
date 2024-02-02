const mongoose = require('mongoose');

//function to connect to teh database (mongoDB)
const connectToDatabase = async () => {
    try {
        //check if URI is in .env
        if (!process.env.MONGO_URI) {
            throw new Error('Please provide the MONGO_URI in the .env file');
        }

        //connection to the databse
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the database...');
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        throw err; 
    }
};

module.exports = { connectToDatabase };
