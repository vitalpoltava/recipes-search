import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {
  @Input() ingredients!: string[] | null;
  @Output() selected = new EventEmitter<string>();

  myControl = new FormControl();
  filteredOptions!: Observable<string[] | undefined>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value)),
    );
  }

  private filter(value: string): string[] | undefined {
    const filterValue = value.toLowerCase();
    if (this.ingredients) {
      return this.ingredients.filter(option => option.toLowerCase().includes(filterValue));
    }
    return;
  }

}
