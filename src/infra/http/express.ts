import express from "express";
import GetRecipe from "../../core/usecase/GetRecipe";
import RecipeRepositoryQuery from "../repository/RecipeRepositoryQuery";
import "../database/database";

const app = express();

app.get("/recipes/:id", async (req, res) => {
  const recipeRepositoryQuery = new RecipeRepositoryQuery();
  const getRecipe = new GetRecipe(recipeRepositoryQuery);
  const { id } = req.params;
  const recipe = await getRecipe.execute(id);
  res.json(recipe);
});

app.listen(3000);
