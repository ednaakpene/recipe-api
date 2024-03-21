import { RecipeModel } from "../models/recipe.js";


export const addRecipe = async (req,res) => {
    // add recipe to databse
const createResult = await RecipeModel.create(req.body);
    // return response
    res.status(201).json(createResult);
    }

export const getRecipes = async (req,res) =>{
    // get all recipes from database
    const findResult = await RecipeModel.find();
    // return response
    res.status(200).json(findResult);
}

export const getRecipe = (req,res) => {
    res.send("get single recipe");
}

export const updateRecipe = (req,res) => {
    res.send(`update single recipe with id: ${req.params.id}`)
}

export const deleteRecipe = (req,res) =>{
    res.send("delete single recipe");
}