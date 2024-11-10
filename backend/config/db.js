const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        // Check if MongoDB is running locally
        const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/employee-management';
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            family: 4 // Force IPv4 instead of trying IPv6 first
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.log('Please ensure MongoDB is running on your system');
        // Retry logic
        setTimeout(connectDB, 5000); // Retry after 5 seconds
    }
};

module.exports = connectDB;
