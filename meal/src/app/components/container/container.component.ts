import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../types/interfaces';

@Component({
  selector: 'list-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() meals!: Meal[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
