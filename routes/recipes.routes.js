import {Router} from "express";

const router = Router();

// define routes

// add recipe

router.post("/recipes", (req,res) => {
res.send("added recipes");
})

// get recipes
router.get("/recipes", (req,res) =>{
    res.send("your recipes")
})

// get recipe by id
router.get("/recipes/:id", (req,res) => {
    res.send("get single recipe");
});

// update single recipe
router.patch("/recipes/:id", (req,res) => {
    res.send(`update single recipe with id: ${req.params.id}`)
});

// delete single recipe
router.delete("/recipes/:id", (req,res) =>{
    res.send("delete single recipe");
});

// export router
export default router;