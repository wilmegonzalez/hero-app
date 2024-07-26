import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getHeroes():Observable<Hero[]>{

    // console.log(this.baseUrl)
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }


  getHeroByID(id : string): Observable<Hero|undefined>{

    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError( () => of(undefined))
    )

  }


  getSuggestion(query: string):Observable<Hero[]>{

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);

  }


  addHero(hero : Hero):Observable<Hero>{

    return this.http.post<Hero>(`${this.baseUrl}/heroes`,hero);

  }

  updateHero(hero : Hero):Observable<Hero>{

    if(!hero.id) throw Error('Hero id is required');

    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero);

  }


  deleteHeroById(id: string):Observable<boolean>{

    return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
    .pipe(
      map(resp => true),
      catchError( err => of(false)),

    )
  }
}
