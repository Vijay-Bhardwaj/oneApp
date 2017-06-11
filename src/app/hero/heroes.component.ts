import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroesComponent implements OnInit {
  get heroes(): Hero[] {
    return this._heroes;
  }

  set heroes(value: Hero[]) {
    this._heroes = value;
  }

  selectedHero: Hero;

  private _heroes: Hero[];

  constructor( private router: Router, private heroService: HeroService) {
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
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
