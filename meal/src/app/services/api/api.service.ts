import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigsService } from '../config/configs.service';
import { map } from 'rxjs/operators';
import { ingredientsMapper } from '../../helpers/api-helpers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private configs: ConfigsService) { }

  getIngredients() {
    return this.http.get(this.configs.API_INGREDIENTS_LIST, {})
      .pipe(map(ingredientsMapper));
  }
}
