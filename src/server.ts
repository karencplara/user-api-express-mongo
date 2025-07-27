import app from './app';
import dotenv from 'dotenv';
import { connectDatabase } from './configs/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
      } else {
        console.error('Server error:', err);
      }
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });