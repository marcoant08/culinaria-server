import Recipe from "../../core/entity/Recipe";
import IRecipeRepository from "../../core/repository/IRecipeRepository";
import RecipeModel from "../model/RecipeModel";

export default class RecipeRepositoryQuery implements IRecipeRepository {
  // implementações com banco de dados

  async getRecipe(id: string): Promise<Recipe> {
    const recipe = await RecipeModel.findById(id);
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
