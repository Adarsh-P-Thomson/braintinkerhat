import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Socratic Tutor Backend is running!' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
