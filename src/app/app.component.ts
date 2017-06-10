import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  get heroes(): Hero[] {
    return this._heroes;
  }

  set heroes(value: Hero[]) {
    this._heroes = value;
  }

  selectedHero: Hero;
  title = 'Tour of Heroes';
  private _heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = new Array();
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      s => {
        this.heroes.push(s);
        console.log(s);
      },
      error2 => {
        console.log(error2)
      },
      () => console.log('completed')
    )
    ;
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }


}
