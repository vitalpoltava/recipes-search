import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/types/interfaces';

@Component({
  selector: 'meal-item',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  @Input() item!: Meal;
}
