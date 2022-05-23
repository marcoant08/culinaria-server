import Recipe from "../entity/Recipe";

export default interface IRecipeRepository {
  getRecipe(id: string): Promise<Recipe>;
  saveRecipeEvaluation(
    recipeId: string,
    userId: string,
    score: number,
    comment: string
  ): Promise<void>;
}
