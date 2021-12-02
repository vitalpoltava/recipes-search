export interface Ingredient {
  strIngredient: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea?: string;
  strInstructions?: string;
  strCategory?: string;
}

export interface IngredientsResponse {
  meals?: Array<Ingredient>;
}

export interface MealsResponse {
  meals?: Array<Meal>;
}
