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
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (origin === "http://localhost:5173") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET",
};

app.use(cors(corsOptions));

// Routes
app.use(router);

// Server Listen
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
