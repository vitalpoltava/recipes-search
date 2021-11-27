export interface Ingredient {
  strIngredient: string;
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
}

export interface IngredientsResponse {
  meals?: Array<Ingredient>;
}

export interface MealsResponse {
  meals?: Array<Meal>;
}
