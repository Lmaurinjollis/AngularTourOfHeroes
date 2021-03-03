import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //imported to know what a hero is in this component
import { HEROES } from '../mock-heroes'; //imported to know the list of hero in this component

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES; //pass the heroes list in the variable used in the HTML of the component
  selectedHero?: Hero; //Check if a Hero object is selected when clicking on the list

  constructor() { }

  ngOnInit() {
  }

  //When a hero is selected the form is displayed by setting the variable selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
