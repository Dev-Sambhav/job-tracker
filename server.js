import "express-async-errors";
import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

// env
import dotenv from "dotenv";
dotenv.config();

// db and authenticate users
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

// only when ready to deploy
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGOOSE_URL);
    app.listen(PORT, () => console.log(`Server is listing on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

// invoke start
start();
