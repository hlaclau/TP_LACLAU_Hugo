import express from 'express';
import usersRouter from './routes/users.js';
import logger from './middlewares/logger.js';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(logger);

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
