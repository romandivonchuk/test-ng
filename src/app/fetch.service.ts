import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getCharacters(id:number = 1) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${id}`)
  }
  getEpisodes(id:number = 1) {
    return this.http.get(`https://rickandmortyapi.com/api/episode?page=${id}`)
  }
}
