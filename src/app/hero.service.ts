import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heros';
import {Hero} from './Hero';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService {
  constructor() {
  }

  getHeroes(): Observable<Hero> {
    return new Observable(e => {
      HEROES.map(s =>
        setInterval(() => e.next(s), 1000)
      );
    })
  }
}
