import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api/api.service';
import { Meal } from './types/interfaces';

@Component({
  selector: 'meal-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Meal selection';
  ingredients!: Observable<string[]>;
  meals!: Observable<Meal[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.ingredients = this.api.getIngredients();
  }

  onSelectIngredient(selectedIngredient: string) {
    this.meals = this.api.getMealByIngredient(selectedIngredient);
  }
}
