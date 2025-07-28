import express from "express";
import { sendReservation} from '../controller/reservation.js'
const reservationRouter = express.Router();
reservationRouter.post("/send", sendReservation);
export default reservationRouter;



