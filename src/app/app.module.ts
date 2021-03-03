import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Must be included for the hero's form

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; //Imported by the CLI's command when generating the component

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent //Declared automatically by the CLI's command when generating the component
  ],
  imports: [
    BrowserModule,
    FormsModule //And should be declared in the import to use it
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
