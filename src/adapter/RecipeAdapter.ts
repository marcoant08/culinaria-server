import Recipe from "../core/entity/Recipe";

export default class RecipeAdapter {
  static create(
    id: string,
    name: string,
    ingredients: Array<string>,
    preparation: Array<string>,
    moreInformation: Array<string>,
    userId: string,
    totalOfEvaluations: number
  ): Recipe {
    // retorna uma instância de receita
    return new Recipe(
      id,
      name,
      ingredients,
      preparation,
      moreInformation,
      userId,
      totalOfEvaluations
    );
  }
}
