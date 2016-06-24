import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit  {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;
  //hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    if (id != null) {
      this.navigated = true;
      this.heroServce.getHero(id).then(hero => this.hero = hero);
    }
    else {
       this.navigated = false;
       this.hero = new Hero();

    }


    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
