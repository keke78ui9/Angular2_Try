import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }, 
  {
 	path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }, 
  {
 	path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService, ROUTER_PROVIDERS
  ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}