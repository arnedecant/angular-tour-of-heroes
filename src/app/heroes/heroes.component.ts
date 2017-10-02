import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

export class HeroesComponent implements OnInit {
	heroes: Hero[] = null;
	selectedHero: Hero;
	displayedColumns = ['id', 'name', 'actions'];
	dataSource = new HeroesDataSource();
	heroesDataSource = HeroesDataSource || null;

	constructor(private heroService: HeroService, private router: Router) {}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.create(name)
		.then(hero => {
			this.heroes.push(hero);
			this.selectedHero = null;
		});
	}

	delete(hero: Hero): void {
		this.heroService.delete(hero.id)
		.then(() => {
			this.heroes = this.heroes.filter(h => h !== hero);
			if (this.selectedHero === hero) { this.selectedHero = null; }
		});
	}

	ngOnInit(): void {
		this.getHeroes();
		this.dataSource = new HeroesDataSource();

		console.log(this.dataSource);
	}
}

let heroes: Hero[] = [];

export class HeroesDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Hero[]> {
    return Observable.of(heroes);
  }

  disconnect() {}
}