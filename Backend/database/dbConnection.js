import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose
     .connect(process.env.MONGO_uri, {
        dbName:"RESTAURANTS",
     })
     .then(()=>{
        console.log("Connected to database successfully");
     })
     .catch((err)=>{
        console.log('Somme error occured while connecting to database! ${err}');
     });
};