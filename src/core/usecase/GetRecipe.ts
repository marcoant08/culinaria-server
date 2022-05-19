import Recipe from "../entity/Recipe";
import IRecipeRepository from "../repository/IRecipeRepository";

export default class GetRecipe {
  recipeRepository: IRecipeRepository;

  constructor(recipeRepository: IRecipeRepository) {
    this.recipeRepository = recipeRepository;
  }

  execute(id: string): Promise<Recipe> {
    return this.recipeRepository.getRecipe(id);
  }
}
