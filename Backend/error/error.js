class ErrorHandler extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode= statusCode;
    }
}


export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message, // Message de l'erreur
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Optionnel pour le debug
    });
};


export default ErrorHandler;


