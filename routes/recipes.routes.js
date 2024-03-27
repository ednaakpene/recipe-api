import {Router} from "express";
import multer from "multer";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

// create multer upload middleware
const upload = multer({dest: "uploads/images"});

// create recipes router
const router = Router();

// define routes

// add recipe

router.post("/recipes", upload.single("image"), addRecipe );

// get recipes
router.get("/recipes", getRecipes);

// get recipe by id
router.get("/recipes/:id", getRecipe);

// update single recipe
router.patch("/recipes/:id", updateRecipe);

// delete single recipe
router.delete("/recipes/:id", deleteRecipe);

// export router
export default router;