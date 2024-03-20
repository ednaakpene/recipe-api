import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipes.routes.js";


// load env variables
dotenv.config({path: [".env.local"]});

// create an express app
const app = express();


// use routes
app.use(recipesRoutes);

// make database connection
await mongoose.connect(process.env.MONGO_URI);


// get the app to listen on port 6000
app.listen(6000, () => {
    console.log("Express app is running");
});