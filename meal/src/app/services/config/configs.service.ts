import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  private readonly API_URL: string = 'https://www.themealdb.com';
  public readonly API_INGREDIENTS_LIST: string = `${this.API_URL}/api/json/v1/1/list.php?i=list`;
  public readonly API_MEALS_BY_INGREDIENT: string = `${this.API_URL}/api/json/v1/1/filter.php?i=`;
}
