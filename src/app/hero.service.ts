//This service exist because component shouldn't fetch or save data themselves nor knowingly show fake data
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/*
  We import Observable and of to simulate the fact that we fetch data from a distant server.
  Therefore our previous code was working because we run the app as is and don't make any
  asynchronous action which is normally not the case for real app.
*/
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //Now we return an Observable array that emit a single value(the heroes list)
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
