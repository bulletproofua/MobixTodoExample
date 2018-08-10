import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobxAngularModule } from 'mobx-angular';
import { FormsModule } from '@angular/forms';

import { SectionComponent } from './components/section/section.component';
import { FiltersComponent } from './components/filters/filters.component';

import { MaterialModule } from './material.module';

import { Todos } from './store/todos.store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MobxAngularModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [Todos],
  bootstrap: [AppComponent]
})
export class AppModule { }
