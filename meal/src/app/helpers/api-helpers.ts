import { Ingredient, IngredientsResponse } from '../types/interfaces';

export const ingredientsMapper = (response: IngredientsResponse): string[] => {
  const meals = response.meals;

  if (meals && meals.length) {
    return meals.map((item: Ingredient) => {
      return item.strIngredient;
    });
  }
  return [];
}
