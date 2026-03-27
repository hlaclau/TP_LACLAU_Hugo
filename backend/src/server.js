import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import usersRouter from "./routes/users.js";

await connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(logger);

app.use("/api/users", usersRouter);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
