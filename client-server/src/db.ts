import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
    try {
      await mongoose.connect(process.env.Mongo_URL);
      console.log("Connected to the Database");
    } catch (error) {
      console.log("Error occurred: " + error);
    }
}
  
connectToDatabase();
export default mongoose.connection;