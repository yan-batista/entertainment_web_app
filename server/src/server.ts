import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import seed_database from "./database/seed";
import router from "./router";

// Server Configuration
dotenv.config();
//seed_database();
const port = process.env.PORT || 3000;

// Server
const app: Express = express();

// cors
app.use(
  cors({
    /* origin: "https://entertainment-web-app-seven-kappa.vercel.app", */
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use(express.json());
app.use(cookieParser());
app.use(router);

// error handling
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

// Server Listen
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
