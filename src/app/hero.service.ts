import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heros';
import {Hero} from './Hero';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class HeroService {
  constructor() {
  }

  getHeroes(): Observable<Hero> {
    return  Observable.interval(500).take(HEROES.length).map(t => HEROES[t])
    /*new Observable(e => {
      HEROES.map(s =>
        setInterval(() => e.next(s), 1000)
      );
    })*/
  }
}
