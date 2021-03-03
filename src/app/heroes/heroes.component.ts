import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //imported to know what a hero is in this component
import { HeroService } from '../hero.service'; //The service is what should provide Heroes data
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = []; //This property will be filled by the service
  selectedHero?: Hero; //Check if a Hero object is selected when clicking on the list

  //Initialize the services when the component is constructed
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit() {
    this.getHeroes(); //Fill the heroes property when the component is intialized
  }

  //When a hero is selected the form is displayed by setting the variable selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //We also send a message that a hero is selected
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  /*
    Now that we have subscribed to the method, the asynchronous request should work
    if we fetch data from a distant server.
  */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
