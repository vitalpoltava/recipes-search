import { Ingredient, IngredientsResponse, MealsResponse, Meal } from '../types/interfaces';

export const ingredientsMapper = (response: IngredientsResponse): string[] => {
  const meals = response.meals;

  if (meals && meals.length) {
    return meals.map((item: Ingredient) => {
      return item.strIngredient;
    });
  }
  return [];
}

export const mealsMapper = (response: MealsResponse): Meal[] => response.meals || [];

export const mealMapper = (response: MealsResponse): Meal => {
  const [meal] = mealsMapper(response);
  return meal;
};

export const mapIngredientForApi = (rawIngredient: string): string =>
  rawIngredient.toLowerCase().replace(' ', '_');
