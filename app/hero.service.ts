import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve => 
			// 2 seconds
			setTimeout(() => resolve(HEROES), 2000));
	}
}