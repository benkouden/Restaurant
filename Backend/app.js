// Importer les dépendances
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js";

// Créer une instance de l'application Express
const app = express();

// Charger les variables d'environnement avec dotenv
dotenv.config({ path: "./config/config.env" });

// CORS - Permet de gérer les demandes de ressources entre différentes origines
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],  // Permet uniquement les requêtes venant de l'URL spécifiée
    methods: ["POST"],  // Autorise uniquement les méthodes POST
    credentials: true,  // Autorise l'envoi des cookies et autres informations d'authentification
  })
);

// Middleware pour traiter les données JSON et URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion à la base de données
dbConnection();

// Appel du middleware d'erreur
app.use(errorMiddleware);

// Définition de la route pour les réservations
app.use("/api/v1/reservation", reservationRoute);


export default app;
