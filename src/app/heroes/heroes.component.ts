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

  //Initialize the services when the component is constructed
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes(); //Fill the heroes property when the component is intialized
  }

  /*
    Now that we have subscribed to the method, the asynchronous request should work
    if we fetch data from a distant server.
  */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
