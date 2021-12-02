import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../types/interfaces';

@Component({
  selector: 'list-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @Input() meals!: Meal[] | null;
  @Output() showItem = new EventEmitter<string>();

  showItemHandler(id: string) {
    this.showItem.emit(id);
  }
}
