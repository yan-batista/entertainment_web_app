import dotenv from "dotenv";
import express, { Express } from "express";
import router from "./router";

// Server Configuration
dotenv.config();
const port = process.env.PORT;

// Server
const app: Express = express();

// Routes
app.use(router);

// Server Listen
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
