import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigsService } from '../config/configs.service';
import { ingredientsMapper, mapIngredientForApi, mealsMapper } from '../../helpers/api-helpers';
import { Meal } from '../../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private configs: ConfigsService) { }

  getIngredients(): Observable<string[]> {
    return this.http.get(this.configs.API_INGREDIENTS_LIST, {})
      .pipe(map(ingredientsMapper));
  }

  getMealByIngredient(ingredient = ''): Observable<Meal[]> {
    return this.http.get(`
      ${this.configs.API_MEALS_BY_INGREDIENT}${mapIngredientForApi(ingredient)}
    `, {}).pipe(map(mealsMapper));
  }
}
