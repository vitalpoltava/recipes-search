import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service'

@Component({
  selector: 'meal-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Meal selection';
  ingredients!: Observable<string[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.ingredients = this.api.getIngredients();
  }

  onSelect(selectedIngredient: string) {
    console.log(selectedIngredient)
  }
}
