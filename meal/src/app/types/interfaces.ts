export interface Ingredient {
  strIngredient: string
}

export interface IngredientsResponse {
  meals?: Array<Ingredient>
}
