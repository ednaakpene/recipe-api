import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
  // add recipe to databse
  const createResult = await RecipeModel.create(req.body);
  // return response
  res.status(201).json(createResult);
};

export const getRecipes = async (req, res, next) => {
  try {
    // get all recipes from database
    const results = await RecipeModel.find();
    // return response
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  try {
    // get single recipe by id
    const findByIdResult = await RecipeModel.findById(req.params.id);
    // return 404 if no recipe is found
    if (findByIdResult === null) {
      return res.status(404).json({
        message: `Recipe with ID: ${req.params.id} not found`,
      });
    } else {
      // return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = (req, res) => {
  res.send(`update single recipe with id: ${req.params.id}`);
};

export const deleteRecipe = (req, res) => {
  res.send("delete single recipe");
};
