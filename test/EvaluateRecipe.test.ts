import EvaluateRecipe from "../src/core/usecase/EvaluateRecipe";
import GetRecipe from "../src/core/usecase/GetRecipe";
import RecipeRepositoryMemory from "../src/infra/repository/RecipeRepositoryMemory";
import RecipeRepositoryQuery from "../src/infra/repository/RecipeRepositoryQuery";
import "../src/infra/database/database";

test("Should get recipe", async () => {
  // const recipeRepositoryMemory = new RecipeRepositoryMemory();
  const recipeRepositoryQuery = new RecipeRepositoryQuery();
  const getRecipe = new GetRecipe(recipeRepositoryQuery);
  const recipe = await getRecipe.execute("5d6ede6a0ba62570afcedd3a");
  console.log("[recipe]", recipe);
  expect(recipe).toBe(null); // testa total de avaliações
});

test.skip("Should evaluate recipe", async () => {
  const recipeRepositoryMemory = new RecipeRepositoryMemory(); // instancia repositório de receitas
  const evaluateRecipe = new EvaluateRecipe(recipeRepositoryMemory); // instancia de caso de uso "avaliar receita", enviando repositório como dependência
  const getRecipe = new GetRecipe(recipeRepositoryMemory); // instacia de caso de uso "buscar receita"
  const recipeBeforeEvaluation = await getRecipe.execute(
    "5d6ede6a0ba62570afcedd3a"
  ); // busca receita (executa instância getRecipe)
  expect(recipeBeforeEvaluation.totalOfEvaluations).toBe(0); // testa total de avaliações
  await evaluateRecipe.execute("5d6ede6a0ba62570afcedd3a", "1", 5, "Muito bom"); // usuário "1" adiciona avaliação à receita "5d6ede6a0ba62570afcedd3a"
  const recipeAfterEvaluation = await getRecipe.execute(
    "5d6ede6a0ba62570afcedd3a"
  ); // busca receita (executa instância getRecipe)
  expect(recipeAfterEvaluation.totalOfEvaluations).toBe(1); // testa total de avaliações
});
