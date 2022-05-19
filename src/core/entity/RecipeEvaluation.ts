export default class RecipeEvaluation {
  userId: string;
  recipeId: string;
  score: number;
  comment: string;

  constructor(
    userId: string,
    recipeId: string,
    score: number,
    comment: string
  ) {
    if (score < 1 || score > 5) throw new Error("Invalid score.");

    this.userId = userId;
    this.recipeId = recipeId;
    this.score = score;
    this.comment = comment;
  }
}
