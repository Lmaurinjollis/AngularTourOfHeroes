//This service exist because component shouldn't fetch or save data themselves nor knowingly show fake data
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }


  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    //return an Observable array that emit a single value(the heroes list)
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
