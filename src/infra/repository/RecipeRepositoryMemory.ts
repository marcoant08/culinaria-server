import RecipeAdapter from "../../adapter/RecipeAdapter";
import Recipe from "../../core/entity/Recipe";
import IRecipeRepository from "../../core/repository/IRecipeRepository";

export default class RecipeRepositoryMemory implements IRecipeRepository {
  // dados em memória, para testes

  recipes = [
    {
      id: "5d6ede6a0ba62570afcedd3a",
      name: "Limonada",
      ingredients: ["2 limões", "2 copos de água", "4 colheres de açúcar"],
      preparation: ["descasca o limão", "joga na água", "coloca açúcar"],
      moreInformation: ["rende 2 porções"],
      userId: "1",
      totalOfEvaluations: 0,
    },
  ];
  recipeEvaluations = [];

  async getRecipe(id: string): Promise<Recipe> {
    // implementação de funções com banco de dados aqui?
    // retorna um Recipe
    const recipeData = this.recipes.find((recipe) => recipe.id === id);
    const totalOfEvaluations = this.recipeEvaluations.length;
    const recipe = RecipeAdapter.create(
      recipeData.id,
      recipeData.name,
      recipeData.ingredients,
      recipeData.preparation,
      recipeData.moreInformation,
      recipeData.userId,
      totalOfEvaluations
    );
    return Promise.resolve(recipe);
  }

  async saveRecipeEvaluation(
    recipeId: string,
    userId: string,
    score: number,
    comment: string
  ): Promise<void> {
    // salva uma avaliação em na receita
    this.recipeEvaluations.push({ recipeId, userId, score, comment });
  }
}
