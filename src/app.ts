import express from 'express';
import userRoutes from './routes/userRoutes';
import { setupSwagger } from './docs/swagger';
const app = express();

app.use(express.json());
app.use('/', userRoutes);

setupSwagger(app); 
export default app;