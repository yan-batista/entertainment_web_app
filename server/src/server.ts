import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
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
    origin: "https://entertainment-web-app-seven-kappa.vercel.app/",
  })
);

// Routes
app.use(router);

// Server Listen
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
