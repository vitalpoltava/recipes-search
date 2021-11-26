import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  public readonly API_URL: string = 'https://www.themealdb.com';
  public readonly API_INGREDIENTS_LIST: string = '/api/json/v1/1/list.php?i=list';
}
