import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input('hero') selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
