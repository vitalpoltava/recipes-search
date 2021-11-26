import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'lookup',
  templateUrl: './lookup.component.html',
})
export class LookupComponent implements OnInit {
  @Input() ingredients!: string[] | null;

  myControl = new FormControl();
  filteredOptions!: Observable<string[] | undefined>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] | undefined {
    const filterValue = value.toLowerCase();
    if (this.ingredients) {
      return this.ingredients.filter(option => option.toLowerCase().includes(filterValue));
    }
    return;
  }

}
