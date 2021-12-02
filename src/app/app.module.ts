import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LookupComponent } from './components/lookup/lookup.component';
import { ApiService } from "./services/api/api.service";
import { ConfigsService } from "./services/config/configs.service";
import { ContainerComponent } from './components/container/container.component';
import { MealComponent } from './components/meal/meal.component';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LookupComponent,
    ContainerComponent,
    MealComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [ApiService, ConfigsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
