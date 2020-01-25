import { HEROES } from './../_mocks/mock-heroes';
import { Hero } from './../_interfaces/hero';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

constructor() { }

getHeroes(): Hero[] {
  return HEROES;
}

}
