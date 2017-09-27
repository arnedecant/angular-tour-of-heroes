import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { FormControl } 		from '@angular/forms';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

// import { HeroSearchService } from '../hero-search/hero-search.service';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
	selector: 'hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: [ './hero-search.component.css' ],
	providers: [HeroService]
})

export class HeroSearchComponent implements OnInit {
	heroes: Hero[];
	searchCtrl: FormControl;
	filteredHeroes: Observable<Hero[]>;

	private searchTerms = new Subject<string>();

	constructor(private heroService: HeroService, private router: Router) {
		this.heroService.getHeroes().then((heroes) => {
			this.heroes = heroes;
			this.filteredHeroes = this.searchCtrl.valueChanges
        		.startWith(null)
        		.map(hero => hero ? this.filterHeroes(hero) : this.heroes.slice());
		});
		this.searchCtrl = new FormControl();
	}

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		// this.heroes = this.searchTerms
		// 	.debounceTime(300)        // wait 300ms after each keystroke before considering the term
		// 	.distinctUntilChanged()   // ignore if next search term is same as previous
		// 	.switchMap(term => term   // switch to new observable each time the term changes
		// 		// return the http search observable
		// 		? this.heroSearchService.search(term)
		// 		// or the observable of empty heroes if there was no search term
		// 		: Observable.of<Hero[]>([]))
		// 	.catch(error => {
		// 		// TODO: add real error handling
		// 		console.log(error);
		// 		return Observable.of<Hero[]>([]);
		// 	});
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}

	filterHeroes(name: string) {
    	return this.heroes.filter(hero =>
      		hero.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  	}
}