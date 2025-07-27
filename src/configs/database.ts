import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || '');
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB. Error:', error);
    process.exit(1);
  }
};