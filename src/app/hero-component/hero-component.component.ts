import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {
  @Input('hero') selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
