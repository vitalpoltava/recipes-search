import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from './services/api/api.service';
import { Meal } from './types/interfaces';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';

@Component({
  selector: 'meal-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Meal selection';
  ingredients!: Observable<string[]>;
  meals!: Observable<Meal[]>;

  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ingredients = this.api.getIngredients();
  }

  onSelectIngredient(selectedIngredient: string) {
    this.meals = this.api.getMealByIngredient(selectedIngredient);
  }

  showItemDetails(mealId: string) {
    this.dialog.open(DetailsDialogComponent, {
      data: this.api.getMealById(mealId),
    });
  }
}
