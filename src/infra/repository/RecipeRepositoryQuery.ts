import Recipe from "../../core/entity/Recipe";
import IRecipeRepository from "../../core/repository/IRecipeRepository";
import RecipeModel from "../model/RecipeModel";

export default class RecipeRepositoryQuery implements IRecipeRepository {
  async getRecipe(id: string): Promise<Recipe> {
    console.log("[a]");
    const recipe = await RecipeModel.findById(id);
    console.log("[b]");
    return recipe;
  }

  async saveRecipeEvaluation(
    recipeId: string,
    userId: string,
    score: number,
    comment: string
  ): Promise<void> {
    await RecipeModel.create({
      recipeId,
      userId,
      score,
      comment,
    });
  }
}
