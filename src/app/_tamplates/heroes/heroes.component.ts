import { HeroService } from './../../_services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../../_interfaces/hero';


// componenten Meta-Daten
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})



export class HeroesComponent implements OnInit {

  // Eigenschaft/ Variable

  // array aus der Mock-Datei laden und zur Verfügung stellen
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
