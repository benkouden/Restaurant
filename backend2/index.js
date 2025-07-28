import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

// Middleware pour traiter les données JSON et URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);


// Définition de la route pour les réservations
app.use("/api/reservation", reservationRouter);





// Appel du middleware d'erreur
app.use(errorMiddleware);

const PORT = 8081 || process.env.PORT;

app.get("/", (req, res) => {
  //Server to Client
  res.json({
    message: "Serveur is running",
  });
});
connectDB();
app.listen(PORT, () => {
  console.log("Serveur is running", PORT);
});
