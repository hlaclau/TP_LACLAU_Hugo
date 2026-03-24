import 'dotenv/config';
import express from 'express';
import usersRouter from './routes/users.js';
import logger from './middlewares/logger.js';
import connectDB from './config/db.js';

await connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(logger);

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
