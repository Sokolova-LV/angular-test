import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SectionsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }