import Recipe from "../entity/Recipe";
import RecipeEvaluation from "../entity/RecipeEvaluation";
import RecipeRepository from "../repository/IRecipeRepository";

export default class EvaluateRecipe {
  recipeRepository: RecipeRepository;

  constructor(recipeRepository: RecipeRepository) {
    this.recipeRepository = recipeRepository;
  }

  async execute(
    recipeId: string,
    userId: string,
    score: number,
    comment: string
  ): Promise<Recipe> {
    // busca receita que receberá a avaliação
    const recipe = await this.recipeRepository.getRecipe(recipeId);
    // cria uma avaliação (instância de RecipeEvaluation)
    const recipeEvaluation = new RecipeEvaluation(
      recipeId,
      userId,
      score,
      comment
    );

    // salva avaliação na receita
    await this.recipeRepository.saveRecipeEvaluation(
      recipeEvaluation.recipeId,
      recipeEvaluation.userId,
      recipeEvaluation.score,
      recipeEvaluation.comment
    );

    return recipe;
  }
}
