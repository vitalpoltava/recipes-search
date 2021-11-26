import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service'

@Component({
  selector: 'meal-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'meal';
  ingredients!: Observable<string[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.ingredients = this.api.getIngredients();
  }
}
