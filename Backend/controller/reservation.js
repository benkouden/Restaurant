import { json } from "express";
import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js"

/*export const sendReservation = async(req,res,next)=>{
    const {firstName, lastName, email, phone, date,time } = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }
    try{
        await Reservation.create({ firstName, lastName, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Sucessfully",
         })
    }catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
           return next(new ErrorHandler(validationErrors.join(" , "), 400));
        }
        return next(error);
    }
};*/
export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        console.error("Error during reservation:", error); // Log complet pour débogage
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error); // Pour les autres types d'erreurs
    }
};
