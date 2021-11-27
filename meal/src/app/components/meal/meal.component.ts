import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from 'src/app/types/interfaces';

@Component({
  selector: 'meal-item',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  @Input() item!: Meal;
  @Output() showItem = new EventEmitter<string>();

  onClick(id: string) {
    this.showItem.emit(id);
  }
}
