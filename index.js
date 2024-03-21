import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import recipesRoutes from "./routes/recipes.routes.js";


// load env variables
dotenv.config({path: [".env.local"]});

// create an express app
const app = express();

// apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// use routes
app.use(recipesRoutes);

// make database connection
await mongoose.connect(process.env.MONGO_URI);


// get the app to listen on port 6000
app.listen(4000, () => {
    console.log("Express app is running");
});