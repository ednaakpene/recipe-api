import {Router} from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

const router = Router();

// define routes

// add recipe

router.post("/recipes", addRecipe );

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