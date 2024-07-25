import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getHeroes():Observable<Hero[]>{

    console.log(this.baseUrl)
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);

  }
}
