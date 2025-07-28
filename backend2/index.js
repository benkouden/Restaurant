// Importations
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

// Chargement .env
dotenv.config();

// App
const app = express();

// Configuration CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Gérer les requêtes OPTIONS (préflight)
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// Routes
app.use("/api/reservation", reservationRouter);

// Middleware erreur
app.use(errorMiddleware);

// Route test
app.get("/", (req, res) => {
  res.json({ message: "Serveur is running" });
});

// Connexion DB + lancement
connectDB();
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("Serveur is running", PORT);
});
