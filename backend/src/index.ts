import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRouter from './routes/health';
import { connectMongo } from './config/mongo';
import { connectPostgres } from './config/postgres';
import { connectRedis } from './config/redis';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Initialize Database Connections
connectMongo();
connectPostgres();
connectRedis();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', healthRouter);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
