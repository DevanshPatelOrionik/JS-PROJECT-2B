import mongoose from "mongoose";

// Direct MongoDB URI with your username, password, and cluster info
const db = "mongodb+srv://ansh32084:1234@cluster0.l0jt2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to MongoDB
export const connectDB = async() => {
    try {
        const { connection } = await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit with failure code if connection fails
    }
};