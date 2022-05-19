import Recipe from "../entity/Recipe";

export default interface IRecipeRepository {
  getRecipe(id): Promise<Recipe>;
  saveRecipeEvaluation(
    recipeId: string,
    userId: string,
    score: number,
    comment: string
  ): void;
}
