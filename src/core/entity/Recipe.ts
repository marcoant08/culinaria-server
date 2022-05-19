export default class Recipe {
  id: string;
  name: string;
  ingredients: Array<string>;
  preparation: Array<string>;
  moreInformation: Array<string>;
  userId: string;
  totalOfEvaluations: number;

  constructor(
    id: string,
    name: string,
    ingredients: Array<string>,
    preparation: Array<string>,
    moreInformation: Array<string>,
    userId: string,
    totalOfEvaluations: number
  ) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.preparation = preparation;
    this.moreInformation = moreInformation;
    this.userId = userId;
    this.totalOfEvaluations = totalOfEvaluations;
  }

  //   isOpen() {
  //     // validação
  //   }
}
